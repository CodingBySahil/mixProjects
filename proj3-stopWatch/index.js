// here we declare variable for hour,min,sec,milliSecond
let hr = 0,min = 0, sec = 0, msec = 0;

// Flag variable is use for time counting when "true" and stop when "false"
let flag = false;

// here we store buttons and button variables 
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

// here we set function which are called when user click on button
// start btn function
startBtn.addEventListener("click", function(){
    flag = true;
    stopwatch();
});

// stop btn function
stopBtn.addEventListener("click", function(){
    flag = false;
    stopwatch();
});

// reset button function
resetBtn.addEventListener("click", function(){
    flag = false;
    stopwatch();
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;
    document.querySelector("#msec").textContent = "00"
    document.querySelector("#sec").textContent = "00"
    document.querySelector("#min").textContent = "00"
    document.querySelector("#hr").textContent = "00"
});

// stop watch function
function stopwatch(){
    if(flag){               // check for flag if true
        msec += 1;          // increse mili sec by 1

        // increase sec when milisecond == 100
        if (msec == 100) {
            sec += 1;
            msec = 0
        }
        // increase min when sec == 60
        if (sec == 60) {
            min += 1;
            sec = 0
        }
        // increase hour when minutes == 60
        if (min == 60) {
            hr += 1;
            min = 0
        }

        // changing time in html 
        if (msec<10) {
            document.querySelector("#msec").textContent = `0${msec}`
        }else{
            document.querySelector("#msec").textContent = msec
        }
        if (sec<10) {
            document.querySelector("#sec").textContent = `0${sec}`
        }else{
            document.querySelector("#sec").textContent = sec
        }
        if (min<10) {
            document.querySelector("#min").textContent = `0${min}`
        }else{
            document.querySelector("#min").textContent = min
        }
        if (hr<10) {
            document.querySelector("#hr").textContent = `0${hr}`
        }else{
            document.querySelector("#hr").textContent = hr
        }
        setTimeout("stopwatch()", 10)
    }
}