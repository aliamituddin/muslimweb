var counter = 0;

var now = new Date();

var dd = now.getDay(); 

function start() {
$(".container").removeClass("open-sidebar");

document.getElementById("sidebar-toggle").style.visibility = "hidden";

document.getElementById("swipe-area").style.visibility = "hidden";


document.getElementById("main").innerHTML = '<div id="greet"></div><div style="background: blue; height:80px; border-radius:8px;"><h3>Today&#039;s Date</h3><b class="MiladyDate"></b><b class="HijriDate"></b></div><div id="diu">h</div><img onclick="quran()" src="https://i.postimg.cc/pVznfYsg/qur.png" alt="Quran" width="32%"/><img onclick="hadith()" src="https://i.postimg.cc/SR62mkXy/hdq.png" alt="Hadith" width="32%"/><img onclick="dua()" src="https://i.postimg.cc/JhFBqTVW/dua.png" alt="Dua" width="32%"/><img onclick="kal()" src="icons/kal.png" alt="Kalimah" width="32%"/><img src="icons/adk.png" onclick="adhkar()" alt="Adhkar" width="32%"/><img src="icons/anm.png" onclick="99n()" alt="99Names" width="32%"/><img src="icons/quy.png" onclick="quotes()" alt="Quotes" width="32%"/><img src="icons/mot.png" onclick="mot()" alt="Motivation" width="32%"/><img src="icons/art.png" onclick="art()" alt="Articles" width="32%"/><img src="icons/recit.png" onclick="rec()" alt="Recitations" width="32%"/><img src="icons/nash.png" onclick="nash()" alt="Nasheeds" width="32%"/>';
if(dd==4){document.getElementById("greet").innerHTML = 'Wednesday';}





}
 



function p() {
counter = counter + 1;
document.getElementById("dhikr").innerHTML = counter;

document.getElementById("adksnd").play();

if(counter==33){
document.getElementById("alert").innerHTML = "Limit";
}else{document.getElementById("alert").innerHTML = "";
}
}

function r(){
counter = 0;

document.getElementById("dhikr").innerHTML = counter;
document.getElementById("alert").innerHTML = "";
}

function m(){

document.getElementById("alert").innerHTML = "";
if(counter==0){

document.getElementById("dhikr").innerHTML = 0;
}else{counter = counter - 1;

document.getElementById("dhikr").innerHTML = counter;

}

}


var x = document.getElementById("deo"); function about() { if (x.style.background === 'black' ) { x.style.background = 'white'; } else {x.style.background = 'black';} }



function adhkar(){

document.getElementById("sidebar-toggle").style.visibility = "visible";

document.getElementById("swipe-area").style.visibility = "visible";



document.getElementById("click").play();
document.getElementById("main").innerHTML = '<div class="adhkar"><audio id="adksnd" src="icons/adk.mp3"></audio><div id="dhikr"></div><div id="alert"></div><div class="btn"><button class="count" onclick="p()">+</button><button class="reset" onclick="r()">o</button><button class="reset" onclick="m()">-</button></div></div>';
 document.getElementById("dhikr").innerHTML = 0;
}







function ft() {

document.getElementById("main").innerHTML = '<iframe id="g2hFrame" title="islamic-calendar" style="width: 300px; height: 280px; border: 4px solid blue; background:blue; color:blue;" scrolling="no" src="https://www.islamicfinder.org/islamic-calendar/widgetGregorian?type=Gregorian"></iframe><iframe src="https://timesprayer.com/widgets.php?frame=1&amp;lang=en&amp;name=salt&amp;sound=true&amp;avachang=true&amp;method=2&amp;fcolor=0006F9&amp;tcolor=5044F9&amp;frcolor=FF11D0" style="border: none; overflow: hidden; width: 100%; height: 200px; color: blue;"></iframe>';
}

var c = document.getElementById("content"); 

function dn() {

c.classList.toggle("night");

}








document.onload = load();

function load() {

document.getElementById("main").innerHTML = '<h1 style="text-align: center;" class="animate__animated animate__heartBeat"><b>Muslim Web</b></h1><div class="intro">Assalamualaikum Thanks for Visiting Muslim Web<br>All in One Islamic Web App.</div><a onclick="start()">Start</a>';


document.getElementById("footer2").innerHTML = 'Copyright© 2020 GemsforAkhirah';


}




 

setTimeout(function(){ document.getElementById("contt").innerHTML = "hello"; }, 4000);



function quran() {

document.getElementById("sidebar-toggle").style.visibility = "visible";

document.getElementById("swipe-area").style.visibility = "visible";


document.getElementById("main").innerHTML = '<p id="main"><p style="vertical-align: middle;">Assalalaikum Thanks for Visiting GemsforAkhirah</p>';
}


$(window).load(function(){ $("[data-toggle]").click(function() { var toggle_el = $(this).data("toggle"); $(toggle_el).toggleClass("open-sidebar"); }); $(".swipe-area").swipe({ swipeStatus:function(event, phase, direction, distance, duration, fingers) { if (phase=="move" && direction =="right") { $(".container").addClass("open-sidebar"); return false; } if (phase=="move" && direction =="left") { $(".container").removeClass("open-sidebar"); return false; } } }); }); 

