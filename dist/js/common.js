//标示动画是否执行
var isAnimated = false;

$(document).ready(function () {

    //on() 添加监听  "所要监听的事件" function(){}当监听到事件后执行的方法
    $(window).on("scroll", function () {
        //this代表window scrollTop()向上滑动的距离
        if ($(this).scrollTop() > 190) {
            $(".navbar").addClass("nav-fixed");
            //如果动画执行过
            if (!isAnimated) {
                $(".navbar").css("top", "-50px");//每次要执行动画之前都将top值设为-40px
                $(".navbar").animate({"top": "0px"}, 1000);
                isAnimated = true;
            }
        } else {
            isAnimated = false;
            $(".navbar").removeClass("nav-fixed");
        }
    });
    $("#mainpage").click(function () {
        //主页
        window.location.href = "zcc/main.action";
    });
    $("#database").click(function () {
        //数据库
        window.location.href = "zcc/database.action";
    });
    $("#photosview").click(function () {
        //图片
        window.location.href = "zcc/photosview.action";
    });
    $("#sendmessage").click(function () {
        //留言
        window.location.href = "zcc/sendmessage.action";
    });
    $("#animation").click(function () {

        //动画
        window.location.href = "zcc/animation.action";
    });
    $("#lovetree").click(function () {
        //lovetree
        window.location.href = "zcc/lovetree.action";
    });
    $("#video").click(function () {
        //视频
        window.location.href = "zcc/video.action";
    });
    //福利界面
    $("#reward").click(function () {
        window.location.href = "zcc/reward.action";
    });
    //bookmark
    $("#bookmark").click(function () {
        window.location.href = "zcc/bookmark.action";
    });
    //测试
    $("#testPage").click(function () {
        window.location.href = "zcc/testPage.action";
    });

    //后台登陆与留言
    $("#backPage").click(function () {
        window.location.href = "zcc/back.action";
    });
    //推送
    $("#backWebsocket").click(function () {
        window.location.href = "zcc/backWebsocket.action";
    });

    /*上传文件*/
    $("#uploadPage").click(function () {
        window.location.href = "zcc/upload.action";
    });
});




