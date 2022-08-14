const Network = function () {
    const init = function () {
        setInterval(_getState, 1000);
    };
    const _getState = function () {
        // https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-network-information/#constants
        console.log('Connections array', Connection);

        const networkState = navigator.connection.type;
        console.log('networkState', networkState);

        const states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        console.log('states', states);

        $('#networkState').text(`Network: ${states[networkState]}`);
    };
    return {
        init: init
    };
}();
