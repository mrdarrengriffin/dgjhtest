function init(){
    
}

function tick(){
    var now = new Date()
    $("#hour").text(now.getHours())
    $("#minute").text(now.getMinutes())
    $("#second").text(now.getSeconds())
}