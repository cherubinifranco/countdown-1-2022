const timeTotal = document.getElementById("totalTime");
const rt = document.getElementById("remainingTime");
const ct = document.getElementById("currentTime");
const playPause = document.getElementById("playPause");
const restartBtn = document.getElementById("restart");

var running = false;

// This part selects the page

pag(2);
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





