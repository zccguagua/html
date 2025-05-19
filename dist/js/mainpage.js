function initmainpage() {

    $("#sentence").empty();
    var urlString = "zcc/mainpageinfo.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        type: 'get',
        success: function (data, textStatus) {
//			console.log(data);
            if (data.status == '202') {

                // alert("出错了！");
                return;
            }
            var x_line = new Array();
            var y_line = new Array();

            var list_count = data.count7;
//			console.log(list_count);
            for (var i = 0; i < list_count.length; i++) {
                x_line.push(list_count[i].day_by_day);
                y_line.push(list_count[i].count);
            }
            var ctx = document.getElementById("myChart").getContext("2d");
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: x_line,
                    datasets: [{
                        backgroundColor: 'rgb(255, 255, 255)',// 绘制双曲线的时候最好使用rgba,要不不透明的白色背景可以使得某些线条绘制不出来
                        borderColor: 'rgb(255, 99, 132)',
                        data: y_line
                    }]
                },
                // 配置文件
                options: {
                    // 标题设置
                    title: {
                        display: true,
                        text: '每日登陆次数'
                    },
                    // 禁用动画
                    animation: {
                        duration: 0
                    },
                    hover: {
                        animationDuration: 0
                    },
                    responsiveAnimationDuration: 0,
                    // 提示功能
                    tooltips: {
                        enable: false
                    },
                    // 顶部的文字提示
                    legend: {
                        display: false
                    },
                    // 设置x,y轴网格线显示,标题等
                    scales: {
                        xAxes: [{
                            // 轴标题
                            scaleLabel: {
                                display: true,
                                labelString: '日期',
                                fontColor: '#000000'
                            },
                            // 网格显示
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: '次数',
                                fontColor: '#000000'
                            },
                            gridLines: {
                                display: false
                            }

                        }]

                    },

                    // 禁用赛尔曲线
                    elements: {
                        line: {
                            tension: 0
                        }
                    }

                }
            });
            var sentence = data.sentence.content;
            // var sen = sentence.re("\\r", "<br>");
            var sen = sentence.replace(/\\r/g, "<br>");
            $("#sentence").append(sen);
        }
    });


    var player = new skPlayer(
        {
            autoplay: true,
            music: {
                type: 'file',
                source: [
                    {
                        name: '日落倾城',
                        author: '卡奇社',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E6%97%A5%E5%85%89%E5%80%BE%E5%9F%8E.mp3',
                        cover: 'dist/images/another/music_bg_11.png'
                    },
                    {
                        name: '安河桥',
                        author: '宋东野',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E5%AE%89%E5%92%8C%E6%A1%A5.mp3',
                        cover: 'dist/images/another/music_bg.jpg'
                    },
                    {
                        name: '致你',
                        author: 'yihuik苡慧',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E8%87%B4%E4%BD%A0.mp3',
                        cover: 'dist/images/another/music_bg_2.png'
                    },
                    {
                        name: '我记得',
                        author: '赵雷',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%88%91%E8%AE%B0%E5%BE%97.mp3',
                        cover: 'dist/images/another/music_bg_8.png'
                    },
                    {
                        name: '银河与星斗',
                        author: 'yihuik苡慧',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E9%93%B6%E6%B2%B3%E4%B8%8E%E6%98%9F%E6%96%97.mp3',
                        cover: 'dist/images/another/music_bg_1.png'
                    },
                    {
                        name: '孤勇者',
                        author: '陈奕迅',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%AD%A4%E5%8B%87%E8%80%85.mp3',
                        cover: 'dist/images/another/music_bg_4.png'
                    },
                    {
                        name: '予你',
                        author: '队长',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%BA%88%E4%BD%A0.mp3',
                        cover: 'dist/images/another/music_bg_5.png'
                    },
                    {
                        name: '给你一瓶魔法药水',
                        author: '告五人',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E7%BB%99%E4%BD%A0%E4%B8%80%E7%93%B6%E9%AD%94%E6%B3%95%E8%8D%AF%E6%B0%B4_.mp3',
                        cover: 'dist/images/another/music_bg_7.png'
                    },
                    {
                        name: '爱人错过',
                        author: '告五人',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E7%88%B1%E4%BA%BA%E9%94%99%E8%BF%87.mp3',
                        cover: 'dist/images/another/music_bg_8.png'
                    },
                    {
                        name: '唯一',
                        author: '告五人',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%94%AF%E4%B8%80.mp3',
                        cover: 'dist/images/another/music_bg_9.png'
                    },
                    {
                        name: '假面舞会',
                        author: '很美味',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%81%87%E9%9D%A2%E8%88%9E%E4%BC%9A.mp3',
                        cover: 'dist/images/another/music_bg_10.png'
                    },
                    {
                        name: '夏日漱石',
                        author: '橘子海（Orange Ocean）',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%A4%8F%E6%97%A5%E6%BC%B1%E7%9F%B3%20%28Summer%20Cozy%20Rock%29.mp3',
                        cover: 'dist/images/another/music_bg_12.png'
                    },
                    {
                        name: '星星在唱歌',
                        author: '司南',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%98%9F%E6%98%9F%E5%9C%A8%E5%94%B1%E6%AD%8C.mp3',
                        cover: 'dist/images/another/music_bg.jpg'
                    },
                    {
                        name: '漠河舞厅',
                        author: '柳爽',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%BC%A0%E6%B2%B3%E8%88%9E%E5%8E%85%C2%B72022.mp3',
                        cover: 'dist/images/another/music_bg_13.png'
                    },
                    {
                        name: '云与海',
                        author: '阿YueYue',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%BA%91%E4%B8%8E%E6%B5%B7.mp3',
                        cover: 'dist/images/another/music_bg_7.png'
                    },
                    {
                        name: '侧脸',
                        author: '于果',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/celian.mp3',
                        cover: '../image/another/music_bg_1.png'
                    }, {
                        name: '世间美好与你环环相扣',
                        author: '柏松',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/shijianmeihaoyunihuanhuanxiangkou.mp3',
                        cover: '../image/another/music_bg_2.png'
                    }, {
                        name: '情深深雨蒙蒙',
                        author: '杨胖雨',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/qingshenshenyumengmeng.mp3',
                        cover: '../image/another/music_bg_3.png'
                    }, {
                        name: '心安理得',
                        author: '王天戈',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/xinanlide.mp3',
                        cover: '../image/another/music_bg_4.png'
                    }, {
                        name: '撒野',
                        author: '凯瑟猫',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/saye.mp3',
                        cover: '../image/another/music_bg_5.png'
                    }, {
                        name: '去年夏天',
                        author: '王大毛',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/qunianxiatian.mp3',
                        cover: '../image/another/music_bg_6.png'
                    },
                    {
                        name: 'Monsters',
                        author: 'Katie Sky',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Monsters.m4a',
                        cover: '../image/another/music_bg_10.png'
                    },
                    {
                        name: '逝去的歌',
                        author: '旅行团',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/shiqudege.mp3',
                        cover: '../image/another/music_bg_11.png'
                    },
                    {
                        name: '请先说你好',
                        author: '贺一航',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/qingxianshuonihao.mp3',
                        cover: '../image/another/music_bg_12.png'
                    },

                    {
                        name: 'Ref-rain',
                        author: 'Aimer',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Ref-rain%20.mp3',
                        cover: '../image/another/music_bg_13.png'
                    },

                    {
                        name: 'Super Love',
                        author: ' ',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Super%20Love.mp3',
                        cover: '../image/another/music_bg_14.png'
                    },

                    {
                        name: '嚣张',
                        author: 'en',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/xiaozhang.m4a',
                        cover: '../image/another/music_bg_15.png'
                    },
                    {
                        name: '不找了',
                        author: '郭旭',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E4%B8%8D%E6%89%BE%E4%BA%86.mp3',
                        cover: 'dist/images/another/music_bg_1.png'
                    },
                    {
                        name: 'Raindrops',
                        author: 'Eliane',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Raindrops.mp3',
                        cover: 'dist/images/another/music_bg_2.png'
                    },
                    {
                        name: '水星记',
                        author: '郭顶',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E6%B0%B4%E6%98%9F%E8%AE%B0.mp3',
                        cover: 'dist/images/another/music_bg_3.png'
                    },
                    {
                        name: 'River Flows In You',
                        author: 'Yiruma',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/River_Flows_In_You.mp3',
                        cover: 'dist/images/another/music_bg_4.png'
                    },
                    {
                        name: 'Cruisin',
                        author: 'Sioen',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Cruisin.mp3',
                        cover: 'dist/images/another/music_bg_5.png'
                    },
                    {
                        name: 'Safe And Sound',
                        author: 'Taylor Swift',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Safe%20And%20Sound.mp3',
                        cover: 'dist/images/another/music_bg_6.png'
                    },
                    {
                        name: 'Gymnopedie Nr.1',
                        author: 'Martin Ermen',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Gymnopedie_Nr_1.mp3',
                        cover: 'dist/images/another/music_bg_7.png'
                    },
                    {
                        name: 'Something Just Like This',
                        author: 'ColdPlay',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Something_Just_Like_This.mp3',
                        cover: 'dist/images/another/music_bg_8.png'
                    },
                    {
                        name: '云烟成雨',
                        author: '房东的猫',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8.mp3',
                        cover: 'dist/images/another/music_bg_9.png'
                    },
                    {
                        name: 'Ship In The Sand',
                        author: 'Marble Sounds',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Ship_In_The_Sand.mp3',
                        cover: 'dist/images/another/music_bg_10.png'
                    },
                    {
                        name: 'Papillon',
                        author: 'Secret Garden',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Papillon.mp3',
                        cover: 'dist/images/another/music_bg_11.png'
                    },
                    {
                        name: 'Maps',
                        author: 'Alyson Stoner',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Maps.mp3',
                        cover: 'dist/images/another/music_bg_12.png'
                    },
                    {
                        name: '寻人启事',
                        author: '徐佳莹',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E5%AF%BB%E4%BA%BA%E5%90%AF%E4%BA%8B.mp3',
                        cover: 'dist/images/another/music_bg_13.png'
                    },
                    {
                        name: 'A Thousand Years',
                        author: 'Christina Perri',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/A_Thousand_Years.mp3',
                        cover: 'dist/images/another/music_bg_14.png'
                    },
                    {
                        name: '想い出は逺くの日々',
                        author: '天門',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E6%83%B3%E3%81%84%E5%87%BA%E3%81%AF%E9%80%BA%E3%81%8F%E3%81%AE%E6%97%A5%E3%80%85.mp3',
                        cover: 'dist/images/another/music_bg_15.png'
                    },
                    {
                        name: 'Mine',
                        author: 'ILLENIUM',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Mine.mp3',
                        cover: 'dist/images/another/music_bg_16.png'
                    },
                    {
                        name: 'A Place Nearby',
                        author: 'Lene Marlin',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/A_Place_Nearby.mp3',
                        cover: 'dist/images/another/music_bg.jpg'
                    },
                    {
                        name: 'The Promise',
                        author: 'Secret Garden',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/The_Promise.mp3',
                        cover: 'dist/images/another/music_bg_1.png'
                    },
                    {
                        name: '告白气球',
                        author: '周二珂',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3',
                        cover: 'dist/images/another/music_bg_2.png'
                    },
                    {
                        name: '小人物',
                        author: '金玟岐',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E5%B0%8F%E4%BA%BA%E7%89%A9.mp3',
                        cover: 'dist/images/another/music_bg_3.png'
                    },
                    {
                        name: 'Gotta Have You',
                        author: 'The Weepies',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Gotta_Have_You.mp3',
                        cover: 'dist/images/another/music_bg_4.png'
                    },
                    {
                        name: '追光者',
                        author: '岑宁儿',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E8%BF%BD%E5%85%89%E8%80%85.mp3',
                        cover: 'dist/images/another/music_bg_5.png'
                    },
                    {
                        name: 'アイロニ',
                        author: 'majiko',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/%E3%82%A2%E3%82%A4%E3%83%AD%E3%83%8B.mp3',
                        cover: 'dist/images/another/music_bg_7.png'
                    },
                    {
                        name: 'Sunrise',
                        author: 'Shannon Hurley',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Sunrise.mp3',
                        cover: 'dist/images/another/music_bg_8.png'
                    },
                    {
                        name: 'On My Balcony',
                        author: 'Flunk',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/On_My_Balcony.mp3',
                        cover: 'dist/images/another/music_bg_9.png'
                    },
                    {
                        name: 'Star Sky',
                        author: 'Two Steps From Hell',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/Star%20Sky.mp3',
                        cover: 'dist/images/another/music_bg_10.png'
                    },
                    {
                        name: '不再犹豫',
                        author: 'Beyond',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%B8%8D%E5%86%8D%E7%8A%B9%E8%B1%AB.mp3',
                        cover: 'dist/images/another/music_bg_11.png'
                    },
                    {
                        name: '光辉岁月',
                        author: 'Beyond',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%85%89%E8%BE%89%E5%B2%81%E6%9C%88.mp3',
                        cover: 'dist/images/another/music_bg_12.png'
                    },
                    {
                        name: '海阔天空',
                        author: 'Beyond',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA.mp3',
                        cover: 'dist/images/another/music_bg_13.png'
                    },
                    {
                        name: '情人',
                        author: 'Beyond',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%83%85%E4%BA%BA.mp3',
                        cover: 'dist/images/another/music_bg_13.png'
                    },
                    {
                        name: '打上花火',
                        author: 'DAOKO,米津玄師',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.mp3',
                        cover: 'dist/images/another/music_bg_14.png'
                    },
                    {
                        name: 'Young For You',
                        author: 'GALA',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Young%20For%20You.mp3',
                        cover: 'dist/images/another/music_bg_15.png'
                    },
                    {
                        name: 'Sweet but Psycho',
                        author: 'Ava Max',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Sweet%20but%20Psycho.mp3',
                        cover: 'dist/images/another/music_bg_16.png'
                    },
                    {
                        name: 'willow',
                        author: 'Taylor Swift',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/willow.mp3',
                        cover: 'dist/images/another/music_bg.jpg'
                    },

                    {
                        name: '爱的飞行日记',
                        author: '周杰伦',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E7%88%B1%E7%9A%84%E9%A3%9E%E8%A1%8C%E6%97%A5%E8%AE%B0.mp3',
                        cover: 'dist/images/another/music_bg_3.png'
                    },

                    {
                        name: '反方向的钟',
                        author: '周杰伦',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%8F%8D%E6%96%B9%E5%90%91%E7%9A%84%E9%92%9F.mp3',
                        cover: 'dist/images/another/music_bg_6.png'
                    },

                    {
                        name: '后来遇见他',
                        author: '胡66',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%90%8E%E6%9D%A5%E9%81%87%E8%A7%81%E4%BB%96.mp3',
                        cover: 'dist/images/another/music_bg_11.png'
                    },

                    {
                        name: '像我这样的人',
                        author: '毛不易',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%83%8F%E6%88%91%E8%BF%99%E6%A0%B7%E7%9A%84%E4%BA%BA.mp3',
                        cover: 'dist/images/another/music_bg_14.png'
                    },
                    {
                        name: '你的答案',
                        author: '阿冗',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%BD%A0%E7%9A%84%E7%AD%94%E6%A1%88.mp3',
                        cover: 'dist/images/another/music_bg_15.png'
                    },
                    {
                        name: '十年',
                        author: '陈奕迅',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%8D%81%E5%B9%B4.mp3',
                        cover: 'dist/images/another/music_bg_16.png'
                    },

                    {
                        name: '一万次悲伤',
                        author: '逃跑计划',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%B8%80%E4%B8%87%E6%AC%A1%E6%82%B2%E4%BC%A4.mp3',
                        cover: 'dist/images/another/music_bg_1.png'
                    },
                    {
                        name: '再见，再见',
                        author: '逃跑计划',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%86%8D%E8%A7%81%2C%E5%86%8D%E8%A7%81.mp3',
                        cover: 'dist/images/another/music_bg_2.png'
                    },
                    {
                        name: '揪心的玩笑与漫长的白日梦',
                        author: '万能青年旅店',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%8F%AA%E5%BF%83%E7%9A%84%E7%8E%A9%E7%AC%91%E4%B8%8E%E6%BC%AB%E9%95%BF%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6.mp3',
                        cover: 'dist/images/another/music_bg_3.png'
                    },
                    {
                        name: '杀死那个石家庄人',
                        author: '万能青年旅店',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%9D%80%E6%AD%BB%E9%82%A3%E4%B8%AA%E7%9F%B3%E5%AE%B6%E5%BA%84%E4%BA%BA.mp3',
                        cover: 'dist/images/another/music_bg_4.png'
                    },
                    {
                        name: '晚安',
                        author: '颜人中',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%99%9A%E5%AE%89.mp3',
                        cover: 'dist/images/another/music_bg_5.png'
                    },
                    {
                        name: '与我无关',
                        author: '阿冗',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3.mp3',
                        cover: 'dist/images/another/music_bg_6.png'
                    },
                    {
                        name: '我的名字',
                        author: '焦迈奇',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%88%91%E7%9A%84%E5%90%8D%E5%AD%97.mp3',
                        cover: 'dist/images/another/music_bg_7.png'
                    },
                    {
                        name: '路过人间',
                        author: '郁可唯',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E8%B7%AF%E8%BF%87%E4%BA%BA%E9%97%B4.mp3',
                        cover: 'dist/images/another/music_bg_8.png'
                    },
                    {
                        name: '一百万个可能',
                        author: 'Christina Welch',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%B8%80%E7%99%BE%E4%B8%87%E4%B8%AA%E5%8F%AF%E8%83%BD.mp3',
                        cover: 'dist/images/another/music_bg_9.png'
                    },
                    {
                        name: 'A Thousand Miles',
                        author: 'Josh Vietti',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/A%20Thousand%20Miles.mp3',
                        cover: 'dist/images/another/music_bg_10.png'
                    },
                    {
                        name: '童话镇',
                        author: '陈一发儿',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E7%AB%A5%E8%AF%9D%E9%95%87.mp3',
                        cover: 'dist/images/another/music_bg_11.png'
                    },
                    {
                        name: 'New Boy',
                        author: '房东的猫，陈婧霏',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/New%20Boy.mp3',
                        cover: 'dist/images/another/music_bg_12.png'
                    },
                    {
                        name: '我还年轻 我还年轻',
                        author: '老王乐队',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%88%91%E8%BF%98%E5%B9%B4%E8%BD%BB%20%E6%88%91%E8%BF%98%E5%B9%B4%E8%BD%BB.mp3',
                        cover: 'dist/images/another/music_bg_13.png'
                    },
                    {
                        name: '为你我受冷风吹',
                        author: '林忆莲',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E4%B8%BA%E4%BD%A0%E6%88%91%E5%8F%97%E5%86%B7%E9%A3%8E%E5%90%B9.mp3',
                        cover: 'dist/images/another/music_bg_14.png'
                    },
                    {
                        name: '光的方向',
                        author: '张碧晨',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E5%85%89%E7%9A%84%E6%96%B9%E5%90%91.mp3',
                        cover: 'dist/images/another/music_bg_15.png'
                    },
                    {
                        name: '我还年轻 我还年轻',
                        author: '张叶蕾',
                        src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/%E6%88%91%E8%BF%98%E5%B9%B4%E8%BD%BB%E6%88%91%E8%BF%98%E5%B9%B4%E8%BD%BB%20%EF%BC%88%E6%97%A0%E5%BF%B5%E7%99%BD%EF%BC%89.mp3',
                        cover: 'dist/images/another/music_bg_16.png'
                    },
                    // {
                    //     name: 'Normal No More',
                    //     author: 'TYSM',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/music/Normal%20No%20More.mp3',
                    //     cover: 'dist/images/another/music_bg.jpg'
                    // },
                    // {
                    //     name: '你好 再见',
                    //     author: '金玟岐',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/再见_你好.mp3',
                    //     cover: 'dist/images/another/music_bg_10.png'
                    // }
                    // {
                    //     name: 'You Are Not Alone',
                    //     author: '迈克尔杰克逊',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/You_Are_Not_Alone.mp3',
                    //     cover: 'dist/images/another/music_bg_6.png'
                    // }
                    // {
                    //     name: '山外小楼也听雨',
                    //     author: '任然',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/山外小楼也听雨.mp3',
                    //     cover: 'dist/images/another/music_bg_13.png'
                    // },
                    // {
                    //     name: '空空如也',
                    //     author: '任然',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/空空如也.mp3',
                    //     cover: 'dist/images/another/music_bg_14.png'
                    // }
                    // {
                    //     name: '可能否',
                    //     author: '木小雅',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/可能否.mp3',
                    //     cover: 'dist/images/another/music_bg_6.png'
                    // },
                    // {
                    //     name: '纸短情长',
                    //     author: '花粥',
                    //     src: 'https://zccguagua.oss-cn-hangzhou.aliyuncs.com/music/blog/纸短情长.mp3',
                    //     cover: 'dist/images/another/music_bg_7.png'
                    // }
                ]
            }
        });


}
