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

document.getElementById("camera").addEventListener('click', foto);



