
"use strict"

var sec=0;
var min=0;
var hr=0;
var cron;
var tempo = 1000;



function start () {
    cron = setInterval(() => { timer(); }, tempo); 
    
}

function Pause () {
    clearInterval(cron);
}

function stop () {
    clearInterval(cron)
 hr=0
 sec=0
 min=0
 document.getElementById('counter').innerText = '00:00:00';
}



function timer(){

sec++;

if(sec == 60) {
    sec = 0
    min++ 

    if(min ==60) {
        min = 0
        hr++
    }
}

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) +':' + (sec < 10 ? '0' + sec : sec); 
    document.getElementById ('counter').innerText = format;

}