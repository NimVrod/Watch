//today + 1 day
var eventtime = Date.now() + 1000 * 60 * 60 * 24;
function changetime(time) {
    eventtime = time;
}
function calculate() {
    var diff = eventtime - Date.now();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
}
function calculatepercentage(n, h) {
    var a;
    if (h) {
        a = (n / 24) * 100;
    }
    else {
        a = (n / 60) * 100;
    }
    return Math.abs((a - 100));
}
function settime() {
    var _a = calculate(), days = _a[0], hours = _a[1], minutes = _a[2], seconds = _a[3];
    var dayspan = document.getElementById("days");
    var hourspan = document.getElementById("hours");
    var minutespan = document.getElementById("minutes");
    var secondspan = document.getElementById("seconds");
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
    var inter = setInterval(settime, 1000);
});
