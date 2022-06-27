//today + 1 day
let eventtime: number = Date.now() + 1000 * 60 * 60 * 24;

function changetime(time: number) {
    eventtime = time
}

function calculate() {
    let diff = eventtime - Date.now();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
}

function calculatepercentage(n: number, h: boolean) {
    let a:number
    if (h){
        a = (n / 24) * 100;
    }
    else {
        a = (n / 60) * 100;
    }

    return Math.abs((a - 100));
}

function settime() {
    let [days, hours, minutes, seconds] = calculate();
    let dayspan = document.getElementById("days");
    let hourspan = document.getElementById("hours");
    let minutespan = document.getElementById("minutes");
    let secondspan = document.getElementById("seconds");
    dayspan.innerHTML = days.toString() + "d";
    dayspan.parentElement.style.setProperty("--p", calculatepercentage(days, true).toString());
    hourspan.innerHTML = hours.toString() + "h";
    hourspan.parentElement.style.setProperty("--p", calculatepercentage(hours, true).toString());
    minutespan.innerHTML = minutes.toString() + "m";
    minutespan.parentElement.style.setProperty("--p", calculatepercentage(minutes, false).toString());
    secondspan.innerHTML = seconds.toString() + "s";
    secondspan.parentElement.style.setProperty("--p", calculatepercentage(seconds, false).toString());
}


document.addEventListener("DOMContentLoaded", function () {
    let inter = setInterval(settime, 1000);
});