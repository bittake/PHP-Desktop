<?php
$dir=dirname($_SERVER['SCRIPT_FILENAME']);
include($dir . '/system/password.php');
class php_desktop{
	public function start($Userpassword){
		php_desktop::$c_up = (!empty($_COOKIE['up']))?$_COOKIE['up']:'';

		if(php_desktop::if_login(php_desktop::$c_up) ){
			php_desktop::$login = true;

		}elseif(php_desktop::if_login($Userpassword) == true){
			php_desktop::$login = true;
			setcookie("up",$Userpassword,time() * 60 * 60 * 60 * 24 * 10);
		}else{
			php_desktop::$login = false;
		}
		php_desktop::html();
	}

	public function if_login($up){
		$logined = false;
		if($up == ''){
			$logined=false;
		}elseif($up == $GLOBALS['UserPassword']){
			$logined=true;
		}else{
			$logined=false;
		}
		return $logined;
	}

	public function html(){
		if(!php_desktop::$login){
			echo
				'<!doctpye html>
				<html>
					<head>
						<link rel="stylesheet" href="./system/Resources/css/login.css">
						<link rel="stylesheet" href="./system/Resources/css/window.css">
						<meta charset="utf-8">
						<script type="text/javascript" src="./system/Resources/js/jquery.min.js"></script>
						<script type="text/javascript" src="./system/Resources/js/login.js?js=1">
						</script>
						<title>登陆|PHP-Desktop</title>
					</head>
					<body>
					</body>
				</html>
				';

		}else{
			echo('
			<!doctpye html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>桌面|PHP-Desktop</title>
					<script type="text/javascript" src="./system/Resources/js/jquery.min.js"></script>
					<script language="javascript" src="./system/Resources/js/desktop.js.php?i=.js"></script>
					<script language="javascript" src="./system/Resources/js/window.js"></script>
					<script language="javascript" src="./system/Resources/js/dload.js"></script>
				</head>
				<body>
					<div id="menubar"><div id="power" title="关机"></div>
					<div id="menu"><se id="file">文件</se>
					&nbsp;
					<se id="set">设置</se>
					&nbsp;
					<se id="edit">编辑器</se>
					&nbsp;
					<se id="about">关于</se>
					</div>
					<div id="time"></div></div>
				</body>
			</html>
		');
		}

	}

	//Username and Password
	private static $c_up = '';
	private static $login = false;
}
?>
