<?php

	header("content-type:text/javascript;charset=utf-8");
	$dir=dirname($_SERVER['SCRIPT_FILENAME']);
	include($dir."/../../background.php");
	//开头
	$img = "url(./system/Resources/back/".$back.".jpg)"; 
		

	echo 'function updatetime(){
	var myDate = new Date();
	$("#time").html(myDate.getHours()+":"+myDate.getMinutes()+":" + myDate.getSeconds());
	setTimeout("updatetime()",200);
	}'."\n";


	echo "$(function(){ \n";
	echo '$("body").css("background-image","'.$img.	'");'."\n";
	echo '$("body").css("background-size","100%");'."\n";
	echo '$("body").css("background-repeat","no-repeat")'."\n";
	
	echo '$("#menubar").css({
		"position":"absolute",
		"top":"0",
		"left":"0",
		"width": "100%",
    	"height": "22px",
    	"background":"-moz-linear-gradient(top, #e9e9e9 0%, #bbbabb 100%)",
    	"background":"-webkit-gradient(linear, left top, left bottom, color-stop(0%,#e9e9e9), color-stop(100%,#bbbabb))",
		"background":"linear-gradient(#e9e9e9, #bbbabb)"
		});'."\n";
	echo '$("#power").css({
	"background":"'.'url('."'./system/Resources/img/power.fw.png'".")".'"'.','.
	'"position":"absolute",
	"top":"1px",
	"left":"5px",
	"width":"20px",
	"height":"20px",
	"cursor":"pointer"
	'.
	'});'."\n";
	
	echo '
	$("#power").click(function(){
	document.cookie="up=";
	window.opener = null;
	window.open(" ","_self","").close();
	});
	'."\n";
	
	echo '
	$("#time").css({
	"position":"absolute",
	"right":"0",
	"top":"0",
	"color":"black",
	"height":"20px",
	"width":"90px"
	});
	'."\n";
	echo '
	$("#menu").css({
	"position":"absolute",
	"color":"black",
	"left":"50px",
	"font-family":"黑体"
	
	});
	'."\n";
	
	echo 'updatetime();'."\n";
	
	echo '});'."\n";
	/*$(function(){
	 * 	$("body").css("background-image","url(./system/Resources/back/1.jpg)");
	 * ..
	 * });*/
	?>


