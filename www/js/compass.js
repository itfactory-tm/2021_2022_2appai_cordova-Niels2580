const Compass = function () {
    let myCompass;
    const options = {
        frequency: 1000    //default is 100 (ms)
    };
    const init = function () {
        
    };
    const _compassSuccess = function (heading) {
        console.clear();
        console.log(heading);
        const degr = parseInt(heading.magneticHeading);
        const txt = `${degr} &deg;`;
        _update(txt, degr);
    };
    const _compassError = function (error) {
        const degr = '0';
        const txt = (error.code === 3) ? '<b>Compass not supported</b>' : `<b>Fout: </b> ${error.code}`;
        _update(txt, degr);
    };
    const _update = function (txt, degr) {
        $('#compass').html(txt);
        $('#compassImg').css('transform', `rotate(${degr}deg)`);
    };
    const start = function () {
        myCompass = navigator.compass.watchHeading(_compassSuccess, _compassError, options);
    };
    const stop = function () {
        navigator.compass.clearWatch(myCompass);
        _update('&nbsp;', 0);
    };
    return {
        init: init,
        start: start,
        stop: stop
    };
}();
