var x = document.getElementById("locatie");

document.getElementById("camera").addEventListener('click', foto);


function foto() {
    navigator.camera.getPicture(onSucces, onFail, {
        quality: 100,
        saveToPhotoAlbum: true,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSucces(imageURI) {
        var image = document.getElementById("image");
        image.src = "data:image/jpeg;base64," + imageURI;

    }

    function onFail(message) {
        alert('Failed because ' + message);
    }
}

const value = document.getElementById("search");
const btn = document.getElementById("submit-button");


btn.onclick = function () {
    const value2 = value.value;
    if (localStorage.getItem(value2)) {
        localStorage.removeItem(value2);
        localStorage.setItem(value2, value2);
    } else {
        localStorage.setItem(value2, value2);
    }
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]) + "<br>");
    }
    document.getElementById("Isoutput").innerHTML = values;

}
const loc = document.getElementById("laden")
loc.onclick = function () {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]) + "<br>");
    }
    document.getElementById("Isoutput").innerHTML = values;

}


