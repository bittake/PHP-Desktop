// JavaScript Document
$(document).ready(function(){
	var div = '<div id="load"><img src="./system/Resources/img/load.fw.png" height="100px" width="100px"></div>';
	$(document.body).append(div);
	$("#load").css("position","absolute");
	$("#load").css("top",""+(window.innerHeight -100)/2 +"px");
	$("#load").css("left",""+(window.innerWidth -100)/2 +"px");
	document.title="开机中|PHP-Desktop";

});

window.onload=function(){
	setTimeout(function(){
		$("#load").remove();
		$(document.body).css("backgroundColor","white");
		document.title="解锁|PHP-Desktop";
		document.body.style.backgroundImage="url(./system/Resources/back/2.jpg)";
		var h =`<div class="wrapper">
    <div class="header">Unlock &nbsp;<span>PHP-Desktop</span></div>
    <form action="" method="post">
        <ul>
            <li>
            </li>
            <li>
                <div class="password">
                    <input type="password" name="up" placeholder="请输入密码">
                </div>
            </li>

            <li>
                <input type="submit" value="登陆">
            </li>
        </ul>
    </form>
    `;
		$(document.body).append(h);
	},2000);

};
