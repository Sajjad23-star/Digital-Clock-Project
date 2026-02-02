
const currentTime =() =>{
    let time = new Date().toLocaleTimeString();

    document.getElementById("clock").innerText = time;
    };
setInterval(currentTime,1000);