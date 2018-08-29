$(document).ready(function(){
  $("#about").click(function(){
    var id=createWindow();
    $("#"+id).css({
      "top":"50px",
      "width":"300px",
      "height":"500px"
    });
    $("#"+id+" .content").html(`<div align="center">
    <h1>PHP-Desktop</h1>
    <h3>Version(版本):1.0.0</h3>
    <h4>这是一个PHP写的云端OS</h4>
    </div>`);
    setWindowTitle("关于",id);
  });
});
