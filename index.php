<?php
$dir=dirname($_SERVER['SCRIPT_FILENAME']);
include($dir."/pdcore.php");
$pd = new php_desktop;
$pd -> start(!empty($_POST['up'])?$_POST['up']:null);
?>