//tergeting min,h,s text

const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minute")

const secondE1=document.getElementById("second");
const ampmE1=document.getElementById("ampm");

function addZero(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=addZero(h);
    m=addZero(m);
    s=addZero(s);
    hourE1.innerHTML=h;
    //const minuteE1=document.getElementById("minute").innerText=m;
    //const secondE1=document.getElementById("second").innerText=s;
    //const ampmE1=document.getElementById("ampm").innerText=ampm;
    minuteE1.innerHTML=m;
    secondE1.innerHTML=s;
    ampmE1.innerHTML=ampm;

    setTimeout(() => {
        updateClock();
        
    }, 1000);
}

updateClock();