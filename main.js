const time = document.getElementById("time")
const date = document.getElementById("date")
const updateDateTime = () => {
    const now = new Date()
    time.textContent = now.toISOString().split('T')[1].slice(0, 8)
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
date.textContent = days[now.getUTCDay()] + ','
}
updateDateTime()
setInterval(updateDateTime, 1000)