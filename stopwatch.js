window.onload = function () {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let resetBtn = document.getElementById('resetBtn');
    let display = document.getElementById('display');

    let timer;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let isRunning = false;

    startBtn.addEventListener('click', function () {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(updateDisplay, 1000);
        }
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(timer);
        isRunning = false;
    });

    resetBtn.addEventListener('click', function () {
        clearInterval(timer);
        isRunning = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        display.innerHTML="00:00:00";
    });

    function updateDisplay() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

        }
        display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }
};
