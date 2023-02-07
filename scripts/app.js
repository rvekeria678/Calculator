screen = document.querySelector('#screen-content');
screen_aid = document.querySelector('#screen-aid');
var sout = "";
var sin = "";
var equal_pressed = false;

document.querySelectorAll('.digit').forEach(el => el.addEventListener("click", function (event) {
    if (equal_pressed) {
        sout = "";
        sin = "";
        equal_pressed = false;
    }
    sout += event.target.value;
    screen.innerHTML = sout;
    //screen_aid.innerHTML = sout;
}));

document.querySelector('#clear').addEventListener('click', function (event) {
    screen.innerHTML = "";
    screen_aid.innerHTML = "";
    sout = "";
    sin = "";
    equal_pressed = false;
});

document.querySelectorAll('.operator').forEach(el => el.addEventListener("click", function (event) {
    if (event.target.value != '=') {
        sin += (sout + ' ' + event.target.value + ' ');
        screen.innerHTML = "";
        sout = "";
        equal_pressed = false;
        screen_aid.innerHTML = sin;
    }
    else if (!equal_pressed) {
        screen.innerHTML = eval(sin + sout);
        screen_aid.innerHTML = sin + ' ' + sout + ' =';
        sin = screen.innerHTML;
        sout = "";
        equal_pressed = true;
    }
    else {
        sin = "";
        sout = "";
        screen.innerHTML = "ERR"
    }
}));