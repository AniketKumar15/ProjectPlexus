let hour = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


const currentTime = () => {
    setInterval(()=>{
        let time = new Date();
        hour.innerText = time.getHours();
        min.innerText = time.getMinutes();
        sec.innerText = time.getSeconds();
        console.log(time);
    }, 1000);
}
currentTime();