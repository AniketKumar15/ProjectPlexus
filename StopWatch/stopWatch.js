// let hr = document.querySelector(".hr");
// let min = document.querySelector(".min");
// let sec = document.querySelector(".sec");
// let milli = document.querySelector(".milli");

let time = document.querySelector("#time");

let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let resetbtn = document.querySelector("#reset");

let hour = 0, minute = 0, second = 0, counter = 0;
let timer = null;
const stopWatch = () => {
    counter++;

    if(counter == 100){
        counter = 0;
        second++;
    }
    if(second == 60){
        second = 0;
        counter = 0;
        minute++;
    }
    if(minute == 60){
        minute = 0;
        second = 0;
        counter = 0;
        hour++;
    }

    let hr = hour < 10 ? "0" + hour : hour;
    let min = minute < 10 ? "0" + minute : minute;
    let sec = second < 10 ? "0" + second : second;
    let milli = counter < 10 ? "0" + counter : counter;

    time.innerHTML = hr + ':' + min + ':' + sec + ':' + milli;
}

const startWatch = () =>{
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,10);
}
const watchStop = () => {
    clearInterval(timer);
}
const resetWatch = () => {
    clearInterval(timer);
    hour = 0;
    minute = 0; 
    second = 0;
    counter = 0;
    time.innerHTML = "00:00:00:00";
}

startbtn.addEventListener("click",  (evt)=>{
    startbtn.disabled = true;
    stopbtn.disabled = false;
    startWatch();
})

stopbtn.addEventListener("click",  (evt)=>{
    startbtn.disabled = false;
    stopbtn.disabled = true;
    watchStop();
})

resetbtn.addEventListener("click",  (evt)=>{
    startbtn.disabled = false;
    stopbtn.disabled = false;
    resetWatch();
})
