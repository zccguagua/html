const URL = "https://zccguagua.oss-cn-hangzhou.aliyuncs.com/";
$(document).ready(function () {
    getFileList();


//提交
    $("#save").click(function () {
        //创建表单数据容器
        var formData = new FormData()
        //获取文件数据
        file = $('#file')[0].files[0];
        //检查文件上传
        if (!file) {
            alert('请先上传文件');
            return;
        }
        if (file.size > 1024 * 1024 * 10) {
            alert("请选择10m以内文件")
            return;
        }
        //添加表单数据
        formData.append('file', file);
        //得到页面所有表单数据的序列化
        // var AllInputData = $("#formData").serializeArray();
        // //Array转Object
        // AllInputData.forEach(function (e) {
        //     formData.append(e['name'], e['value']);
        // });
        //发送请求
        $.ajax({
            url: "zcc/uploadFile.action",
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (resp) {
                console.log(resp);
                if (resp.status == "200") {
                    alert("上传成功")
                    getFileList();
                } else {
                    alert(resp.msg)
                }
            }
        })
    })

    dragFile.ondragover = function (e) {
        e.preventDefault();
    }
    dragFile.ondrop = function (e) {
        e.preventDefault()
        console.log(e.dataTransfer.files[0]);
        var file = e.dataTransfer.files[0];
        if (null == file) {
            return
        }
        if (file.size > 1024 * 1024 * 10) {
            alert("请选择10m以内文件")
            return;
        }
        var formData = new FormData();
        formData.append("file", file);
        $.ajax({
            url: "zcc/uploadFile.action",
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (resp) {
                console.log(resp);
                if (resp.status == "200") {
                    alert("上传成功")
                    getFileList();
                } else {
                    alert(resp.msg)
                }
            }
        })
    }
});


$("#update").click(function () {
    console.log("click")
    getFileList();
})

function getFileList() {

    $("#fileArea").empty();
    var urlString = "zcc/getFileList.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: "",
        type: 'get',
        success: function (data, textStatus) {
            if (data.status == '202') {

                alert("出错了！");
                return;
            }
            var ss = data.list;
            for (var i = 0; i < ss.length; i++) {
                var object = ss[i];
                $("#fileArea")
                    .append(
                        '<tr><td><a target="_blank" href=' + URL + object.key +
                        '>' + object.key + '</a></td>' + '</td><td>'
                        + '<button class="btn btn-primary btn-sm" id='
                        + object.key
                        + ''
                        + ' onclick='
                        + 'deleteFile(this.id)>删除</button></td></tr>');

            }
        }
    });

}

function deleteFile(objectName) {

    var urlString = "zcc/deleteFile.action";
    $.ajax({
        url: urlString,
        dataType: "json",
        data: {objectName: objectName},
        type: 'get',
        success: function (data, textStatus) {
            if (data.status == '200') {
//                console.log(data);
                alert(data.msg);
                getFileList();
            } else {
                alert("出错了！");
            }
        }
    });

}



