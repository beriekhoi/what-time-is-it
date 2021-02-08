(function(){
    try {
    function updateHour(){
        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        var pHours = document.getElementById("hour"),
            pAMPM = document.getElementById("ampm"),
            pMinutes = document.getElementById("minutes"),
            pSeconds = document.getElementById("seconds"),
            pDayWeek = document.getElementById("dayWeek"),
            pDay = document.getElementById("day"),
            pMonth = document.getElementById("month"),
            pYear = document.getElementById("year");

        const week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        pDayWeek.textContent = week[dayWeek]
        pDay.textContent = day

        const months = new Array("January", "February", "March", "April", "May", "June", "August", "September", "October", "November", "Dicember")
        pMonth.textContent = months[month]

        pYear.textContent = year

        if (hours >= 12) {
            hours = hours - 12
            ampm = "PM"
        } else {
            ampm = "AM"
        }
        if (hours == 0){
            hours = 12
        }
        if (minutes < 10){
            minutes = "0" + minutes
        }
        if (seconds < 10){
            seconds = "0" + seconds
        }
        if (hours < 10){
            hours = "0" + hours
        }
        pHours.textContent = hours
        pAMPM.textContent = ampm
        pMinutes.textContent = minutes
        pSeconds.textContent = seconds

    }
    updateHour()
    let interval = setInterval(updateHour, 1000)
    interval
    } catch (err){
        console.error(err)
    }
}())