function setToday(params){
  year = params.split("-")[0];
  month = params.split("-")[1];
  day = params.split("-")[2];
  monthLen = getDaysInMonth(year,splitMonthandDay(month));
  monthFirstDay = getwekInMonth(year,splitMonthandDay(month));
  setWekDay(monthLen,monthFirstDay);
}

function getDaysInMonth(year,month){
  month = parseInt(month);
  if(month == 12){
      year = year+1;
      month = 0;
  }
  var temp = new Date(year + "/" + (month+1) + "/1" );
  temp = new Date(temp - 1)
  return temp.getDate();
}

function getwekInMonth(year,month){
  month = parseInt(month);
  var temp = new Date(year+"/"+month+"/1");
  return temp.getDay();
}

function setWekDay(monthLen,monthFirstDay){
  var obj_f = document.getElementsByTagName("span");
  var obj_s = document.getElementsByClassName("commonBoxAuto");
  var lastrow = document.getElementById("lastrow");
  for(var i = 1; i <= monthLen; i++){
      var space = i+monthFirstDay-1;
      obj_f[space + 4].innerText = i;
      addClass(obj_f[space + 4],"fontblack");
  }
  for(var i = 0; i < monthLen; i++){
      addClass(obj_s[i+monthFirstDay],"norSignIn");
  }
  for(var i = 35; i < 42; i++){
      if(obj_f[i + 3].innerText != ''){
          rowflag = true;
      }
  }
  if(rowflag){
      removeClass(lastrow, "displayhide");
  }else{
      var fivthrow = document.getElementById("fivthrow");
      removeClass(fivthrow, "border-bottom");
      lastrow.style.display = "none";
  }
}

module.exports = {
  // formatTime: formatTime
}
