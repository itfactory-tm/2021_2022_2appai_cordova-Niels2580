$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.sidenav').sidenav();	/* https://materializecss.com/sidenav.html */

    $('.sidenav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.sidenav').sidenav('close');
    });
    
});

function onDeviceReady() {
    console.log('Device is ready');
    Device.init();
    Network.init();
    Compass.init();
};
