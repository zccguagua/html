$(function () {
        var lockReconnect = false;//避免重复连接
        var ws = null; //WebSocket的引用
        var username = new Date().getTime(); //姓名标识
        var wsUrl = "wss://zccode.cn/ZccWeb/websocket/" + username; //这个要与后端提供的相同
        // var wsUrl = "ws://192.168.1.2:8080/ZccWeb_war/websocket/" + username; //这个要与后端提供的相同
//创建WebSocket连接,如果不确定浏览器是否支持，可以使用socket.js做连接
        function createWebSocket() {
            try {
                if ('WebSocket' in window) {
                    ws = new WebSocket(wsUrl);
                    // ws = new WebSocket("ws://localhost/ZccWeb/websocket");
                } else {
                    ws = new SockJS("http://url/sockjs/socketServer");
                }
                initEventHandle();
            } catch (e) {
                reconnect();
            }
        }

        function reconnect() {
            if (lockReconnect) return;
            lockReconnect = true;
            //没连接上会一直重连，设置延迟避免请求过多
            setTimeout(function () {
                createWebSocket();
                console.log("正在重连，当前时间" + new Date());
                lockReconnect = false;
            }, 5000); //这里设置重连间隔(ms)
        }

        /*********************初始化开始**********************/
        function initEventHandle() {
            // 连接成功建立后响应
            ws.onopen = function () {
                console.log("成功连接到" + wsUrl);
                //心跳检测重置
                heartCheck.reset().start();
            };       // 收到服务器消息后响应
            ws.onmessage = function (e) {
                //如果获取到消息，心跳检测重置
                //拿到任何消息都说明当前连接是正常的
                heartCheck.reset().start();
                // console.log("onmessage:" + e.data);
                var info = $.parseJSON(e.data);
                if (info.status == 200) {
                    $('#myModal').fadeIn();
                    $("#model_message").text(info.msg);
                }

                //Json转换成Object
                // var msg = eval('(' + e.data + ')');
                // if (msg.message == "heartBeat") {
                //忽略心跳的信息，因为只要有消息进来，断线重连就会重置不会触发
                // } else {
                //处理消息的业务逻辑
                // }
            };     // 连接关闭后响应
            ws.onclose = function () {
                console.log("关闭连接");
                reconnect();//重连
            };
            ws.onerror = function () {
                reconnect();//重连
            };
        }

        /***************初始化结束***********************/
            //心跳检测
        var heartCheck = {
                timeout: 30000,//毫秒
                timeoutObj: null, serverTimeoutObj: null,
                reset: function () {
                    clearTimeout(this.timeoutObj);
                    clearTimeout(this.serverTimeoutObj);
                    return this;
                },
                start: function () {
                    var self = this;
                    this.timeoutObj = setTimeout(function () {
                            //这里发送一个心跳，后端收到后，返回一个心跳消息，
                            //onmessage拿到返回的心跳就说明连接正常
                            ws.send("{\"status\":\"300\",\"msg\":\"HeartBeat\",\"name\":\"" + username + "\"}");
                            // console.log("HeartBeat");
                            self.serverTimeoutObj = setTimeout(function () {
                                //如果超过一定时间还没重置，说明后端主动断开了
                                ws.close();
                                //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                            }, self.timeout)
                        }, this.timeout
                    )
                }
            };
        // 发送字符串消息
        $("#sendPushButton").click(function () {
            if (ws.readyState == 1) {
                //自定义消息串，让后端接收

                var msg = $("#pushText").val();
                if (msg != null) {
                    ws.send("{\"status\":\"200\",\"msg\":\"" + msg + "\",\"name\":\"all\"}");
                }


            } else {
                alert("当前连接超时，请刷新重试!");
            }
            return false;
        });
        // 强制退出
        window.onunload = function () {
            ws.close();
        };
        createWebSocket();
        /**启动连接**/
    }
)
;
