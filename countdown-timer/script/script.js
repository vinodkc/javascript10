
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2024';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const currentSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(currentSeconds / 3600 / 24)
  const hours = Math.floor((currentSeconds / 3600) % 24)
  const mins = Math.floor(((currentSeconds / 60 ) % 24 ) % 60)
  const seconds = Math.floor((currentSeconds) % 60)

  daysEl.innerHTML = formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)
  
  console.log(days + " " + hours + " " + mins + " " + seconds );
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}
countdown()
setInterval(countdown, 1000);