function show_all() {
    document.getElementById("cpu-proizvodi").style.display = "block";
    document.getElementById("gpu-proizvodi").style.display = "block";
    document.getElementById("ram-proizvodi").style.display = "block";
}

function show_cpu() {
    document.getElementById("cpu-proizvodi").style.display = "block";
    document.getElementById("gpu-proizvodi").style.display = "none";
    document.getElementById("ram-proizvodi").style.display = "none";
}

function show_gpu() {
    document.getElementById("cpu-proizvodi").style.display = "none";
    document.getElementById("gpu-proizvodi").style.display = "block";
    document.getElementById("ram-proizvodi").style.display = "none";
}

function show_ram() {
    document.getElementById("cpu-proizvodi").style.display = "none";
    document.getElementById("gpu-proizvodi").style.display = "none";
    document.getElementById("ram-proizvodi").style.display = "block";
}

var animals = ["macka", "pas"];
var i;

function robot_check() {
    var cb = document.getElementsByName("robot")[0];
    var robot_container = document.getElementById("robot-kontakt-container");
    var disable_div = document.getElementById("robot-disable-page");

    if (cb.checked) {
        i = Math.floor(Math.random() * (animals.length));
        document.getElementById("robot-image").src = "/images/kontakt/" + animals[i] + ".jpg";

        robot_container.style.display = "flex";
        disable_div.style.display = "block";
    }
    else {
        robot_container.style.display = "none";
        disable_div.style.display = "none";
    }
}

function robot_answer() {
    console.log("test");
    var robot_div = document.getElementById("robot-kontakt");
    var robot_container = document.getElementById("robot-kontakt-container");
    var info_text = document.getElementById("info-display-kontakt");
    var error_p = document.getElementById("robot-error");
    var disable_div = document.getElementById("robot-disable-page");
    var tb = document.getElementById("robot-answer");

    var answer = tb.value.toLowerCase().replace('č', 'c').replace('ć', 'c').replace('š', 's').replace('ž', 'ž').replace('đ', 'dj');

    if (answer == animals[i]) {
        document.getElementsByClassName("request-info-kontakt")[0].style.display = "none";
        robot_container.style.display = "none";
        disable_div.style.display = "none";
        info_text.style.display = "block";
    }
    else {
        info_text.style.display = "none";
        robot_div.style['border'] = "0.25em solid red";
        robot_div.style['animation'] = "shake 0.5s";
        
        var newelm = robot_div.cloneNode(true);
        robot_div.parentNode.replaceChild(newelm, robot_div);

        error_p.innerHTML = "Porešan odgovor!";
    }
}