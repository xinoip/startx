const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");
const dayView = document.getElementById("day");
const dateView = document.getElementById("date");
const bookLinks = document.getElementsByClassName("bookLink");
const alphabet = 'abcdeghijklmnopqrstuvwxyz'.split('');

console.log(bookLinks);

let isLinkMode = false;

console.log(window.history);

function myKeyPress(e){
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }

    if(isLinkMode) {
        openLink(String.fromCharCode(keynum));
    }

    if(String.fromCharCode(keynum) === "f") {
        isLinkMode = !isLinkMode;
        setLinkMode();
    }
}

function openLink(clickedLink) {
    if(isLinkMode) {
        for(let i = 0; i < bookLinks.length; i++) {
            let target = i;
            if(i >= 10) {
                target = alphabet[i - 10];
            }
            if(target == clickedLink) {
                var win = window.open(bookLinks[i].getAttribute("href"), '_blank');
                win.focus();
            }
        }
    } else {
        
    }
}

function setLinkMode() {
    if(isLinkMode) {
        for(let i = 0; i < bookLinks.length; i++) {
            let linkName = i;
            if(i >= 10) {
                linkName = alphabet[i - 10];
            }
            bookLinks[i].textContent = (linkName) + "- " + bookLinks[i].textContent;
        }
    } else {
        for(let i = 0; i < bookLinks.length; i++) {
            bookLinks[i].textContent = bookLinks[i].textContent.substring(3);
        }
    }
}

setTimeout(() => {
    const date = new Date();
    dayView.textContent = getDayStr(date.getDay());
    dateView.textContent = getMonthStr(date.getMonth());
    dateView.textContent += " " + date.getDate() + ",";
    dateView.textContent += " " + date.getFullYear();
}, 1);

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    time1.textContent = hours;
    time2.textContent = minutes;
    time3.textContent = seconds;
}, 1);

function getDayStr(day) {
    switch (day) {
        case 1:
            return "Pazartesi"
        case 2:
            return "Sali"
        case 3:
            return "Carsamba"
        case 4:
            return "Persembe"
        case 5:
            return "Cuma"
        case 6:
            return "Cumartesi"
        case 0:
            return "Pazar"
        default:
            return "wtf";
    }
}

function getMonthStr(month) {
    switch (month) {
        case 0:
            return "Ocak"
        case 1:
            return "Subat"
        case 2:
            return "Mart"
        case 3:
            return "Nisan"
        case 4:
            return "Mayis"
        case 5:
            return "Haziran"
        case 6:
            return "Temmuz"
        case 7:
            return "Agustos"
        case 8:
            return "Eylul"
        case 9:
            return "Ekim"
        case 10:
            return "Kasim"
        case 11:
            return "Aralik"
        default:
            return "wtf";
    }
}