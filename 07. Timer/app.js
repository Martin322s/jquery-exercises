function timer() {
    const hours = $('#hours');
    const minutes = $('#minutes');
    const seconds = $('#seconds');
    let timer = null;

    $('#start-timer').on('click', function () {
        if (timer === null) {
            timer = setInterval(tick, 1000);
        }
    });

    $('#stop-timer').on('click', function () {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    });

    let sec = 0;

    function tick() {
        sec++;
        hours.text(('0' + Math.floor(sec / 60 / 60)).slice(-2));
        minutes.text(('0' + Math.floor(sec / 60) % 60).slice(-2));
        seconds.text(('0' + Math.floor(sec % 60)).slice(-2));
    }
}