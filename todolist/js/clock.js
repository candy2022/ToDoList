const Clock = document.querySelector("h3#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutues = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    Clock.innerText=`${hours}:${minutues}:${seconds}`;

}
getClock();
setInterval(getClock,1000);
