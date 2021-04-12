
function rotate(){
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec= date.getSeconds();

  var hRot = 30 * hr;
  var mRot = 6 * min;
  var sRot = 6 * sec;
  var hour = document.querySelector(".hour");
  hour.style.transform = `rotate(${hRot}deg)`;
  var minute = document.querySelector(".minute");
  minute.style.transform = `rotate(${mRot}deg)`;
var second = document.querySelector(".second");
second.style.transform = `rotate(${sRot}deg)`;
}




setInterval(rotate,1000);
