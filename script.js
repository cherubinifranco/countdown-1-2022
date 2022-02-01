const timeTotal = document.getElementById("totalTime");
const rt = document.getElementById("remainingTime");
const ct = document.getElementById("currentTime");
const playPause = document.getElementById("playPause");
const restartBtn = document.getElementById("restart");
const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const paso3 = document.getElementById("paso3");
var running = false;

// This part selects the page

pag(1);
function pag(n){
    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "none";
    if (n == 1){
        paso1.style.display = "flex";
    } else if (n == 2) {
        paso2.style.display = "flex";
    } else {
        paso3.style.display = "flex";
    }
}

function autoTab(current, to){
    if (current.getAtributte && current.value.length==current.getAtributte("maxlength")){
        to.focus()
    }
}

function play(){
    console.time();
    console.timeLog();
    running = true;
    clock();
    rotate(playPause);
    playPause.setAttribute("onclick", "pause()");
    playPause.setAttribute("src", "icons/pause-circle.png")
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
    rt.innerHTML = timeTotal.innerHTML;
    ct.innerHTML = 0;
    rotate(restartBtn);
    pause();
    console.timeEnd();
    console.clear();
}
function trash(){

}
function clock(){
    var update = setInterval(function(){
        if (running){
            rt.innerHTML -= 1;
            ct.innerHTML -=  1;
            console.timeLog();
            if ( rt.innerHTML <= 0) {
                console.timeEnd();
                rt.innerHTML = 0;
                clearInterval(update);
                pause()
            }
        } else {
            clearInterval(update);
        }
    }, 1000);
}


function rotate(n){
    n.classList.remove("rotate");
    n.offsetWidth;
    n.classList.add("rotate");
}





