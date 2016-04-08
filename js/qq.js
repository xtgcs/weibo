/**
 * Created by John on 2016/3/31.
 */
//qq表情插件
$(function(){
    $('.emotion').qqFace({
        id : 'facebox',
        assign:'saytext',
        path:'arclist/'	//表情存放的路径
    });
        $("#btn").click(function(){
            var str = $("#saytext").val();
            $("#article").html(replace_em(str));
        });
});
//查看结果
function replace_em(str){
    str = str.replace(/\</g,'&lt;');
    str = str.replace(/\>/g,'&gt;');
    str = str.replace(/\n/g,'<br/>');
    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="arclist/$1.gif" border="0" />');
    return str;
}