function init() {
  setInterval(tick, 1000)
}

function tick(){
    var now = new Date()
    $("#hour").text(now.getHours())
    $("#minute").text(now.getMinutes())
    $("#second").text(now.getSeconds())
}
