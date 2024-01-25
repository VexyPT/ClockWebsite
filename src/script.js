function displayTime() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let amOrPm = "AM"

    document.getElementById("clock").innerHTML = `${hour}:${min}:${sec} ${amOrPm}`;
}

setInterval(displayTime, 1000);

//log 
let log = console.log.bind(document)
log(`sim ${5}`)