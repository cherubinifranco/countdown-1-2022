const circle = document.getElementById("circle");
const remainingTime = document.getElementById("remainingTime");
const ct = document.getElementById("currentTime");
const playPause = document.getElementById("playPause");
const restartBtn = document.getElementById("restart");

let timeCount;
let minutes;
let seconds;

var running = false;
var audio = new Audio('sound.mp3');

// This part selects the page


pag(1);
function pag(n){
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let page3 = document.getElementById("page3");

    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";

    if (n == 1){
        page1.style.display = "flex";
    } else if (n == 2) {
        page2.style.display = "flex";
    } else {
        page3.style.display = "flex";
    }
}

function check(){
    if (minutes == 0 && seconds == 0){
        pag(2);
        alert("Please select a valid time.")
    } else {
        play()
    }
}
function play() {
    running = true;
    rotate(playPause);
    playPause.setAttribute("onclick", "pause()");
    playPause.setAttribute("src", "icons/pause-circle.png");

    var update = setInterval(function(){
        if (running){
            timeCount -= 1;
            display();
            if ( timeCount <= 0) {
                timeCount = 0;
                clearInterval(update);
                pause();
                circle.classList.add("ringring");
                audio.play();
                playPause.style.display = "none";
            }
        } else {
            clearInterval(update);
        }
    }, 1000);

}

function pause() {
    if (running){
        rotate(playPause);
        playPause.setAttribute("onclick", "play()");
        playPause.setAttribute("src", "icons/play-circle.png");
        running = false;
    }
}

function restart(){
    rotate(restartBtn);
    pause();
    clock();
    playPause.style.display = "block";
    circle.classList.remove("ringring");
    audio.pause();
    audio.currentTime = 0;
}

// This makes the countdown work ones the time is given

function clock(){
    timeCount = document.getElementById("timeSelector").valueAsNumber;
    timeCount /= (1000*60);
    display();
}

function display(){
    minutes = Math.floor(timeCount / 60);
    seconds = timeCount - (minutes * 60);
    remainingTime.innerHTML = minutes + ":" + seconds;
}


function rotate(n){
    n.classList.remove("rotate");
    n.offsetWidth;
    n.classList.add("rotate");
}



