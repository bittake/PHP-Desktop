$("head").prepend('<link rel="stylesheet" href="./system/Resources/css/window.css">');
var id_n=0;











function createWindow(){
	//using 'var id=createWindow();' Then you can get "win1",then use '$("#"+id)' to control window
	window.id_n++;
	var jwindow_div_start = '<div id="win'+window.id_n+'"' + 'class="window">';
		var jwindow_div_bar='<div class="bar">';
		var jwindow_div_button='<div class="button"></div></div>';
		var jwindow_div_title='<div class="title"></div>';
		var jwindow_div_content='<div class="content"></div>';
	var jwindow_div_end = '</div>';
	
	$(document.body).append(jwindow_div_start + jwindow_div_bar + jwindow_div_button + jwindow_div_title + jwindow_div_content + jwindow_div_end);
	
	
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


	$("#"+"win"+id_n){
		
	}
	return "win"+id_n;
}

function setWindowTitle(title,win_id){
	
	//using 'setWindowTitle("Hello",id);' to set title. id is the "win1" that created
	$("#"+win_id).html(title);
	
}

