const value = document.getElementById("search");
const btn = document.getElementById("submit-button");


btn.onclick = function () {
    const value2 = value.value;

    var int = localStorage.length;
    localStorage.setItem(int, value2);


    var values = [],
        keys = Object.keys(localStorage).sort(),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]) + "<br>");
    }
    document.getElementById("Isoutput").innerHTML = values;
    int = new Date();

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
const btn4 = document.getElementById("btn3");
btn4.onclick = function () {
    localStorage.clear();
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]) + "<br>");
    }
    document.getElementById("Isoutput").innerHTML = values;
}