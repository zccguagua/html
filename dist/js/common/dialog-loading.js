(function ($) {
    var my_dialog_plug_name = "mydialog", my_loading_plug_name = "myloading";
    var my_loading_box;
    function MyJqDialog(element, options){
        this.init(element, options);
    }

    MyJqDialog.prototype.init = function (element, options) {
        var defaults = {autoShow: false, "zIndex": 4000};
        this.element = element;
        this.settings = $.extend( {}, defaults, options );

        var overlay_css = {"width": "100%", "height": "100%", "filter": "alpha(opacity=40)",
            "-moz-opacity": "0.4", "-khtml-opacity": "0.4", "opacity": "0.4", "background": "#000",
            "position": "absolute", "top": "0", "left": "0", "z-index": "3000", "display": "none"};
        this.overlay = $("<div/>").css(overlay_css).appendTo($("body"));
        this.element.css({"z-index": this.settings.zIndex, position: "absolute"});
        var _this = this;
        $(window).resize(function () {
            //only do it if the dialog box is not hidden
            if (!$('#dialog-box').is(':hidden')) _this.resizeBox();
        });
        $(window).scroll(function () {
            _this.resizeBox();
        });
        if(this.settings.autoShow){
            this.show();
        }
    };

    MyJqDialog.prototype.show = function () {
        //transition effect
        this.overlay.fadeIn(200);
        this.overlay.fadeTo("slow", 0.8);
        //transition effect
        this.element.fadeIn(500);
        this.resizeBox();
    };

    MyJqDialog.prototype.hide = function () {
        this.element.hide();
        this.overlay.hide();
    };

    MyJqDialog.prototype.resizeBox = function () {
        var box = this.element;

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(document).width();

        //Set height and width to mask to fill up the whole screen
        $(this.overlay).css({'width':maskWidth,'height':maskHeight});

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
        var scrollT = $(window).scrollTop();
        var scrollL = $(window).scrollLeft();

        //Set the popup window to center
        box.css('top',  winH/2 - box.outerHeight()/2 + scrollT);
        box.css('left', winW/2 - box.width()/2 + scrollL);
    };

    $.fn[my_dialog_plug_name] = function( options ) {
        var elt;
        if ( options instanceof Object || !this.data( "plugin_" + my_dialog_plug_name ) ) {
            elt = new MyJqDialog( this, options );
            this.data('plugin_' + my_dialog_plug_name, elt);
        } else {
            elt = this.data( "plugin_" + my_dialog_plug_name );
        }
        if (typeof(options) == "string" && options.length>0){
            eval("elt."+options+"(this)");
        }
        return this;
    };

    function MyJqMyLoad(options){
        this.init(options);
    }
    MyJqMyLoad.prototype = {
        init: function (options){
            var _this = this;

            this.element = options.loading_box;
            var width = $(document).width();
            width = width * 0.5;
            var defaults = {width: width+"px", title: "正在处理，请稍后..."};
            if(typeof options === 'undefined') options = {};
            this.settings = $.extend( {}, defaults, options );

            this.confirm_box_css = {width: this.settings.width};
            this.element.css(this.confirm_box_css);

            this.element.find(".my-loading-title").html(this.settings.title);
            this.element[my_dialog_plug_name]("show");
        }
    };
    $[my_loading_plug_name] = function(options){
        if(my_loading_box == null){
            my_loading_box = $("<div class='my-loading-box'><div class='my-loading-img'></div><div class='my-loading-title'></div></div>");
            $("body").append(my_loading_box);
        }
        if (typeof(options) == "string" && options=="getDialog"){
            return my_loading_box;
        }
        if (typeof(options) == "string" && options=="hide"){
            my_loading_box.mydialog("hide");
            return;
        }
        if(typeof options === 'undefined'){
            options = {};
        }
        options.loading_box = my_loading_box;
        new MyJqMyLoad(options);
    }
}( jQuery ));