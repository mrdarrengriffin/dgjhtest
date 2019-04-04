var locale = {
    clock: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
}

function init() {
    setInterval(tick, 1000)
}

function tick() {
    var now = new Date()
    // Date
    $("#date #dayname").text(locale.clock.days[now.getDay() - 1])
    $("#date #day").text(now.getDate())
    $("#date #day-ordinal").text(getOrdinal(now.getDate()))
    $("#date #month").text(locale.clock.months[now.getMonth() - 1])
    $("#date #year").text(now.getFullYear())

    // Time
    $("#time #hour").text(now.getHours())
    $("#time #minute").text(now.getMinutes())
    $("#time #second").text(padZero(now.getSeconds()))
}

function padZero(i) {
    return (i < 10 ? "0" + i : i)
}

function getOrdinal(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}