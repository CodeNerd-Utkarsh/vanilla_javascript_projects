// selectors
let DaysEle = document.getElementById("Days")
let HoursEle = document.getElementById("Hours")
let MinutesEle = document.getElementById("Minutes")
let SecondsEle = document.getElementById("Seconds")

// declare your date
let holi = "18 Mar 2022";

const countdown = () => {
    const holiDate = new Date(holi);
    const currentDate = new Date();

    // * calculate total remaining seconds
    const totalSeconds = (holiDate - currentDate) / 1000;
    // * calculate remaining days
    const days = Math.floor(totalSeconds / 3600 / 24);
    // * calculate total remaining hours
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // * calculate total remaining minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // * calculate total remaining seconds
    const seconds = Math.floor(totalSeconds) % 60;

    //   console.log(days, hours, minutes, seconds);
    DaysEle.innerHTML = days
    HoursEle.innerHTML = formatTime(hours)
    MinutesEle.innerHTML = formatTime(minutes)
    SecondsEle.innerHTML = formatTime(seconds)
};
function formatTime(time) {
    return time >= 10 ? time : `0${time}`
}
countdown();
setInterval(() => {
    countdown();
}, 1000);
