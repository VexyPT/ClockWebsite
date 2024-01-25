function displayTime() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let amOrPm = "AM"
    if (hour >= 12) {
        amOrPm = "PM";
    }

    document.getElementById("clock").innerHTML = `${hour}:${min}:${sec} ${amOrPm}`;
}

setInterval(displayTime, 1000);