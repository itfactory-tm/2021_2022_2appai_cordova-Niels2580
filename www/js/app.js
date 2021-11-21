$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.sidenav').sidenav();	/* https://materializecss.com/sidenav.html */

    $('.sidenav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.sidenav').sidenav('close');
    });


    $('#addTask').click(function () {
        console.log('add a new location');
        ToDo.addTask();


    });

    $('ul').on('blur', '.title', function () {
        console.log('update a location');
        const id = $(this).data('task');   // id = the value of x from data-task="x"
        const task = $(this).html();       // task = the HTML code in the text field
        ToDo.editTask(id, task);
    });

    $('ul').on('click', '.deleteTask', function () {
        console.log('delete a location');
        const id = $(this).data('task');   // id = value x from data-task="x"
        ToDo.deleteTask(id);

    });


});

function onDeviceReady() {
    console.log('Device is ready');

};
