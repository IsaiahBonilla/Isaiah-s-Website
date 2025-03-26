const text = document.querySelectorAll('text')
const message = document.querySelector('message')
const extra = document.querySelector('extra')


let startup = 0;
let time = 0;
let selected_text = {}

updateTime(); // Initial call to display time immediately
setInterval(updateTime, 1000); // Update time every 1000 milliseconds (1 second)
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString;
  }
