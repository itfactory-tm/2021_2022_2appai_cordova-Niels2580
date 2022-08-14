const Device = function () {
    const init = function () {
        console.log(device);
        const data = `
            <b>Manufacturer: </b>${device.manufacturer}<br>
            <b>Model: </b>${device.model}<br>
            <b>Serial number: </b>${device.serial}<br>
            <b>UUID: </b>${device.uuid}<br>
            <b>Cordova: </b>${device.cordova}<br>
            <b>Platform: </b>${device.platform}<br>
            <b>Platform version: </b>${device.version}
        `;
        $('#model').html(data);
    };
    return {
        init: init
    };
}();
