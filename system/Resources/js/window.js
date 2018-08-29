$("head").prepend('<link rel="stylesheet" href="./system/Resources/css/window.css">');
var id_n=0;

function createWindow(){
	//using 'var id=createWindow();' Then you can get "win1",then use '$("#"+id)' to control window
	window.id_n++;
	var jwindow_div_start = '<div id="win'+window.id_n+'"' + 'class="window">';
		var jwindow_div_bar_s='<div class="bar">';
			var jwindow_div_button='<div class="button"><a href="#" class="close" data-rel="close">::before close ::after</a><a href="#" class="maximize" data-rel="maximize">::before maximize ::after</a><a href="#" class="minimize" data-rel="minimize">::before minimize ::after</a></div>';
			var jwindow_div_title='<div class="title"></div>';
		var jwindow_div_bar_e="</div>";
		var jwindow_div_content='<div class="content"></div>';
	var jwindow_div_end = '</div>';

	$(document.body).append(jwindow_div_start + jwindow_div_bar_s + jwindow_div_button + jwindow_div_title +jwindow_div_bar_e+ jwindow_div_content + jwindow_div_end);
	 $(".window .bar").mousedown(function(e){
                    var isMove = true;
                    var div_x = e.pageX - $(this).parent().offset().left;
                    var div_y = e.pageY - $(this).parent().offset().top;
	 				var moveDiv=$(this).parent();
                    $(document).mousemove(function (e) {
                        if (isMove) {
							var obj = $(moveDiv);
                            obj.css({"left":e.pageX - div_x, "top": e.pageY- div_y});
							if(div_x>=e.pageX){
								obj.css("left","0")
							}
							if(div_y>=e.pageY){
								obj.css("top","0");
							}
                        }
                    }).mouseup(
                        function () {
                        isMove = false;
                    });
            });
	 $(".window .close").click(function(){
	 	$(this).parent().parent().parent().remove();
	 });
	 bindResize(document.getElementById("win"+id_n));
	 $(".window").click(function(){
		 $(".window").css("z-index","100");
		 $(this).css("z-index","1000");
	 });
	 $(".window .maximize").click(function(){
	 	if($(this).parent().parent().parent().css("top")=="22px" &&$(this).parent().parent().parent().css("left")=="0px"&&$(this).parent().parent().parent().css("right")=="0px"){
	 		$(this).parent().parent().parent().css({
	 		"top":"10%",
	 		"left":"10%",
	 		"bottom":"",
	 		"right":"",
	 		"width":"80%",
	 		"height":"80%"
	 	});

	 	}else{

	 	$(this).parent().parent().parent().css({
	 		"top":"22px",
	 		"left":"0px",
	 		"bottom":"0px",
	 		"right":"0px",
	 		"width":""+window.innerWidth+"px",
	 		"height":""+window.innerHeight-22+"px"
	 	});
	 		}
	 	 });
	$('body').bind('resize',function(){return false;});
	return "win"+id_n;
}

function setWindowTitle(title,win_id){

	//using 'setWindowTitle("Hello",id);' to set title. id is the "win1" that created
	$("#"+win_id+" .title").html(title);

}

  function bindResize(el){
    //初始化参数
    var els = el.style,
      //鼠标的 X 和 Y 轴坐标
      x = y = 0;
    //邪恶的食指
    $(el).mousedown(function(e){
      //按下元素后，计算当前鼠标与对象计算后的坐标
      x = e.clientX - el.offsetWidth,
      y = e.clientY - el.offsetHeight;


      if((el.offsetWidth-3<e.clientX-el.offsetLeft&&e.clientX-el.offsetLeft<el.offsetWidth+3) || (el.offsetHeight-3<e.clientY-el.offsetTop&&e.clientY-el.offsetTop<el.offsetHeight+3)){
      //在支持 setCapture 做些东东
      el.style.cursor="se-resize";
      el.setCapture ? (
        //捕捉焦点
        el.setCapture(),
        //设置事件

        el.onmousemove = function(ev){
          mouseMove(ev || event)
        },
        el.onmouseup = mouseUp
      ) : (

        //绑定事件
        $(document).bind("mousemove",mouseMove).bind("mouseup",mouseUp)
      )
      //防止默认事件发生
      e.preventDefault()
  } $(document).bind("mousemove","").bind("mouseup","");
    });
    //移动事件
    function mouseMove(e){
      //宇宙超级无敌运算中...
      els.width = e.clientX - x + 'px',
      els.height = e.clientY - y + 'px'
    }
    //停止事件
    function mouseUp(){
      //在支持 releaseCapture 做些东东
      el.style.cursor="";
      el.releaseCapture ? (
        //释放焦点
        el.releaseCapture(),
        //移除事件
        el.onmousemove = el.onmouseup = null
      ) : (
        //卸载事件
        $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
      )
    }
  }
