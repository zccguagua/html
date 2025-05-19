$(document).ready(function () {
    initialize(1);

    $("#addTen").click(function () {
        $("#addTen").attr("disabled", true);
        var detailss = setTimeout("disabled_true();", 10000);
    });


});

function disabled_true() {
    $("#addTen").attr("disabled", false);

}

/* 初始化病区 */
function initialize(cpage) {

    $("#tbody").empty();
    var urlString = "zcc/findinpatient.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: {key: "", cp: cpage},
        type: 'get',
        success: function (data, textStatus) {
//            console.log(data);
            if (data.status == '202') {

                alert("出错了！");
                return;
            }


            var page = data.totalCount % 10 == 0 ? data.totalCount / 10 : (data.totalCount / 10 + 1);

            $('#bottom_box').pagination({
                pageCount: page,
                callback: PageCallback,
                current: cpage,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页'
            });


            var ss = data.list;
            for (var i = 0; i < ss.length; i++) {

                var object = ss[i];
                var sex;
                (object.sex == '1') ? sex = "男" : sex = "女";
                $("#tbody")
                    .append(
                        '<tr class=ppp><td>'
                        + object.code
                        + '</td><td>'
                        + object.name
                        + '</td><td>'
                        + object.abbr
                        + '</td><td>'
                        + sex
                        + '</td><td>'
                        + object.birthday
                        + '</td><td>'
                        + object.checkin_date
                        + '</td><td>'
                        + object.checkout_date
                        + '</td><td>'
                        + object.zone_number
                        + '</td><td>'
                        + object.room_number
                        + '</td><td>'
                        + object.bed_number
                        + '</td><td>'
                        + object.doctor
                        + '</td><td>'
                        + object.care_level
                        + '</td><td>'
                        + object.condition
                        + '</td><td>'
                        + object.note
                        + '</td><td>'
                        + object.last_modify
                        + '</td><td>'
                        + object.nurse
                        + '</td><td>'
                        + '<button class="btn-xs btn-info" data-deid='
                        + object.code
                        + ''
                        + ' onclick='
                        + 'changeInpatient(this)>修改</button>'
                        + '<button class="btn-xs btn-danger" id='
                        + object.code
                        + ''
                        + ' onclick='
                        + 'deteleInpatient(this.id)>删除</button></td></tr>');

            }
        }
    });

}


/* 点击搜索的翻页初始化 */
function initialize2(cpage) {

    $("#tbody").empty();
    var urlString = "zcc/findinpatient.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: {key: $("#keyWord").val(), cp: cpage},
        type: 'get',
        success: function (data, textStatus) {
//            console.log(data);
            if (data.status == '202') {

                alert("出错了！");
                return;
            }


            var page = data.totalCount % 10 == 0 ? data.totalCount / 10 : (data.totalCount / 10 + 1);

            $('#bottom_box').pagination({
                pageCount: page,
                callback: PageCallback2,
                current: cpage,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '末页',
                prevContent: '上页',
                nextContent: '下页'
            });


            var ss = data.list;
            for (var i = 0; i < ss.length; i++) {
                var object = ss[i];
                var sex;
                (object.sex == '1') ? sex = "男" : sex = "女";
                $("#tbody")
                    .append(
                        '<tr class=ppp><td>'
                        + object.code
                        + '</td><td>'
                        + object.name
                        + '</td><td>'
                        + object.abbr
                        + '</td><td>'
                        + sex
                        + '</td><td>'
                        + object.birthday
                        + '</td><td>'
                        + object.checkin_date
                        + '</td><td>'
                        + object.checkout_date
                        + '</td><td>'
                        + object.zone_number
                        + '</td><td>'
                        + object.room_number
                        + '</td><td>'
                        + object.bed_number
                        + '</td><td>'
                        + object.doctor
                        + '</td><td>'
                        + object.care_level
                        + '</td><td>'
                        + object.condition
                        + '</td><td>'
                        + object.note
                        + '</td><td>'
                        + object.last_modify
                        + '</td><td>'
                        + object.nurse
                        + '</td><td>'
                        + '<button class="btn-xs btn-info" data-deid='
                        + object.code
                        + ''
                        + ' onclick='
                        + 'changeInpatient(this)>修改</button>'
                        + '<button class="btn-xs btn-danger" id='
                        + object.code
                        + ''
                        + ' onclick='
                        + 'deteleInpatient(this.id)>删除</button></td></tr>');

            }
        }
    });

}

function PageCallback(index, jq) {
    // 前一个表示您当前点击的那个分页的页数索引值，后一个参数表示装载容器。
//    console.log(index.getCurrent());
    initialize(index.getCurrent());
}


function PageCallback2(index, jq) {
    // 前一个表示您当前点击的那个分页的页数索引值，后一个参数表示装载容器。
//    console.log(index.getCurrent());
    initialize2(index.getCurrent());
}


$("#search").click(function () {
    initialize2(1);

});


$("#addTen").click(function () {

    var urlString = "zcc/insertinpatient.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        type: 'get',
        success: function (data, textStatus) {
            if (data.status == '200') {
//                console.log(data);

                alert(data.msg);
                initialize(1);
            } else {
                alert("出错了！");
            }
        }
    });

});

$("#addOne").click(function () {

    var urlString = "zcc/insertOne.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        type: 'get',
        success: function (data, textStatus) {

            if (data.status == '200') {
//                console.log(data);

                alert(data.msg);
                initialize(1);
            }
            else {
                alert("出错了");
            }
        }
    });

});


$("#cleanAll").click(function () {

    $('#delcfmModel').modal();

});


function cleanAll() {

    var urlString = "zcc/cleanAll.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        type: 'get',
        success: function (data, textStatus) {

            if (data.status == '200') {
//                console.log(data);

                alert(data.msg);
                initialize(1);
            }
            else {
                alert("出错了!");
            }
        }
    });
}


function deteleInpatient(code) {

    var urlString = "zcc/deleteinpatient.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: {code: code},
        type: 'get',
        success: function (data, textStatus) {
            if (data.status == '200') {
//                console.log(data);
                alert(data.msg);
                initialize(1);
            }
            else {
                alert("出错了！");
            }
        }
    });


}

function changeInpatient(dada) {
    var ss = dada.getAttribute('data-deid');
//    document.getElementById('#changeModalData').setAttribute('data-chid', ss);
    $("#changeModalData").data('chid', ss);
    $('#changemModel').modal();




}

function changeOne(change) {
	var ss1= $("#changeModalData").data('chid');
    var urlString = "zcc/changepatient.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: {code: ss1},
        type: 'get',
        success: function (data, textStatus) {
            if (data.status == '200') {
//                console.log(data);
                alert(data.msg);
                initialize(1);
            }
            else {
                alert("出错了！");
            }
        }
    });
}