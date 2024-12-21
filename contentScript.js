function inject() {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0" rel="stylesheet"><link href="https://raw.githack.com/LagTheSystem/ChromeOS-Dock/main/style.css" rel="stylesheet">';

    document.body.innerHTML += '<div id="dock"><div id="launcher"><div id="openBtn" class="button"><span class="material-symbols-outlined">radio_button_checked</span></div></div><div id="apps"><img class="icon" id="chrome" src="https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/chrome.svg"><img class="icon" id="files" src="https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/files.png"><img class="icon" id="settings" src="https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/settings.png"></div><div id="info"><div id="calendar" class="button"></div><div id="clock" class="button"></div></div></div>';
}

inject();

setInterval(updateDock, 100);
document.addEventListener("mousemove", mouseUpdate);

function mouseUpdate(event) {
    if (event.clientY >= (window.innerHeight - 45)) {
        document.getElementById("dock").style.bottom = "0";
    } else {
        document.getElementById("dock").style.bottom = "-60px";
    }
}

function updateDock() {
    let time = new Date();
    let month = time.toLocaleString('en-US', { month: 'short' });
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
    } else if (hour === 0) {
        hour = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = `${hour}:${min}`;
    let currentDate = `${month} ${date}`;

    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("calendar").innerHTML = currentDate;
}

updateDock();

const filesUrl = "chrome://file-manager";
const settingsUrl = "chrome://os-settings";

function files() {
    chrome.tabs.create({ url: filesUrl });
}

function settings() {
    chrome.tabs.create({ url: settingsUrl });
}
