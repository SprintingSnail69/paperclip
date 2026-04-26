const weekday = new Date().getDate();
const month = new Date().toLocaleString('default', { month: 'short' });
const year = new Date().getFullYear();

document.getElementById("footerYear").textContent = year;
document.getElementById("date").textContent = month + " " + weekday + ", " + year;