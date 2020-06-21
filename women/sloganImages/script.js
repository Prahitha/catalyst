function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
}

var quotes = ["Blank", "\"A woman is like a tea-bag, you never know how strong she is until she gets in hot water.\"<br>-  Eleanor Roosevelt",
 "\"Women are the largest untapped reservoir of the world.\"<br> - Hilary Clinton",
  "\"If you want something said, ask a man; if you want something done, as a woman. \"<br>- Margaret Thatcher", 
  "\"I am no longer accepting the things I cannot change. I'm changing the things I cannot accept.\"<br>- Angela Davis",
   "\"I changed what I could, and what I couldn't, I endured.\"<br>- Dorothy Vaughan", 
   "\"I hadn't been aware that there were doors closed to me until I started knocking on them.\"<br>- Gertrude B. Elion", 
   "\"I raise up my voice- not so that I can shout, but so that those without a voice can be heard. We cannot all succeed when half of us are held back.\"<br>- Malala Yousafzai", 
   "\"There is no limit to what we, as women, can accomplish.\"<br>- Michelle Obama",];

function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}
