const timerWrapper = document.getElementsByClassName('timer-wrapper')[0];
const date = timerWrapper.getAttribute("data-timer");

const dateFormat = (date) =>  date.split("-").reverse().join("-");

function countdownTimeStart() {
    const countDownDate = Date.parse(dateFormat(date) + 'T24:00:00Z');

    const x = setInterval(function () {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerWrapper.innerHTML = '<div id="timer">'+ days + "d " + hours + "h "
            + minutes + "m " + seconds + "s " +'</div>';

        if (distance < 0) {
            clearInterval(x);
            timerWrapper.style.display = "none";
        }
    }, 1000);
}


if (typeof (timerWrapper) != 'undefined' && timerWrapper != null) {
    countdownTimeStart()
}
