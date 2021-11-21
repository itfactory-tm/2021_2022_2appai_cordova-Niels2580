var x = document.getElementById("locatie");


const ToDo = function () {

    let _todos = ['Dummy location'];


    const _setLocalStorage = function () {
        console.log('save all locations in local storage');
        console.log('_todos[]', _todos);
        localStorage.setItem('todo', JSON.stringify(_todos));  // localStorage.setItem('key', 'value')
        _taskList();
    };

    const _taskList = function () {
        console.log('add all locations to the ul tag');
        $('ul').empty();    // remove all li tags

        _todos.forEach(function (value, key) {
            const item = `<li class="collection-item avatar">
				<i class="material-icons circle red deleteTask" data-task="${key}">delete_forever</i>
				<div class="title" data-task="${key}" contenteditable>${value}</div>
				</li>`;
            $('ul.collection').append(item);
        });
    };

    const init = function () {
        console.log('initialize the Todo app');
        const todos_str = localStorage.getItem('todo');
        if (todos_str !== null) {
            _todos = [];   // empty the array
            _todos = JSON.parse(todos_str);
        }
        _taskList();
    };

    const addTask = function () {
        console.log('add a new location');
        _todos.push("Longitude: " + "<br>  Latitude: ");


        _setLocalStorage();
    };

    const deleteTask = function (id) {
        console.log(`delete location with id = ${id}`);
        if (confirm('Delete this location?')) {
            _todos.splice(id, 1);   // remove the x-th element from the array
            _setLocalStorage();
        }
    };

    const editTask = function (id, task) {
        console.log(`edit/update a location: _dotos[${id}] = ${task}`);
        _todos[id] = task;
        _setLocalStorage();
    };

    return {
        init: init,
        addTask: addTask,
        deleteTask: deleteTask,
        editTask: editTask
    };
}();


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);


    } else {
        x.innerHTML = "Gelieve uw locatie aan te zetten";
    }
}


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

