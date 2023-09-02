var min = 5;
var sec = 59;
var msec = 100;
var interval;

var minute = document.getElementById('mint');
var second = document.getElementById('sec');
var milisecond = document.getElementById('msec');

function stopWatch(){
    msec--;
    milisecond.innerHTML=msec;

    if(msec<=0 ){
        sec--;
    second.innerHTML = sec;
msec=100    
    }
    else if(sec <=0){
        min--;
        minute.innerHTML=min;
        sec=59;
    }
    
}
function starter(){
 
    interval= setInterval(stopWatch ,10)
}

function stop(){
    clearInterval(interval)
}
function reset(){
min = 5;
sec = 59;
msec = 0;

minute.innerHTML=min;
second.innerHTML=sec;
milisecond.innerHTML=msec
stop()

}

