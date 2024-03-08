function inject() {

document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,700"rel=stylesheet><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"rel=stylesheet><link href="https://raw.githack.com/LagTheSystem/ChromeOS-Dock/main/style.css" rel=stylesheet>'; 
document.body.innerHTML += '<div id=dock><div id=launcher><div id=openBtn class=button><span class=material-symbols-outlined>radio_button_checked</span></div></div><div id=apps><img class=icon id=chrome src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/chrome.svg><img class=icon id=files src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/files.png><img class=icon id=settings src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/settings.png></div><div id=info><div id=calendar class=button></div><div id=clock class=button></div></div></div>';
}

inject();


// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    console.log("updated time");
    // Getting current time and date
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    time.setMonth(month);
    month = time.toLocaleString('en-US', { month : 'short' })
  
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
    } else if (hour == 0) {
        hr = 12;
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    hour = parseInt(hour, 10);
    
    let currentTime =
        hour +
        ":" +
        min;
  
    let currentDate = month + " " + date
 
    // Displaying the time
 document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("calendar").innerHTML = currentDate;
}
 
showTime();

const filesUrl = "chrome://file-manager";
const settingsUrl = "chrome://os-settings";

function files() {
    console.log("files");
    chrome.tabs.create({url: "chrome://file-manager"});
}

function settings() {
    console.log("settings");
    chrome.tabs.create({url: "chrome://os-settings"});
}
