const daysE1 = document.getElementById(`days`);
const hoursE1 = document.getElementById(`hours`);
const minsE1 = document.getElementById(`mins`);
const secsE1 = document.getElementById(`secs`);

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = FormatTime(days);
    hoursE1.innerHTML = FormatTime(hours);
    minsE1.innerHTML = FormatTime(mins);
    secsE1.innerHTML = FormatTime(secs);
}

function FormatTime(time){
 return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);