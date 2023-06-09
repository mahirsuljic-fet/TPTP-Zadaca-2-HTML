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

    var errormsg = document.getElementById("kontakt-validation-error");
    var name = document.getElementById("kontakt-ime").value;
    var lastname = document.getElementById("kontakt-prezime").value;
    var email = document.getElementById("kontakt-email").value;
    var kontaktvld = document.getElementById("info-kontakt");

    errormsg.innerHTML = "";
    kontaktvld.style.border = "0.25em solid rgba(0, 50, 100, 0.75)";
    kontaktvld.style.animation = "";

    // provjera unosa imena prazimena i e-maila
    if (!name.match(/^[a-zA-Z]+$/) && name != "")
        errormsg.innerHTML += "Ime nije validno! <br>";
    if (!lastname.match(/^[a-zA-Z]+$/) && lastname != "")
        errormsg.innerHTML += "Prezime nije validno! <br>";
    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,3}$/) && email != "")
        errormsg.innerHTML += "E-mail nije validan! <br>";

    if (errormsg.innerHTML != "") {
        kontaktvld.style.border = "0.25em solid red";
        kontaktvld.style.animation = "shake 0.5s";
        cb.checked = false;

        var newelm = kontaktvld.cloneNode(true);
        kontaktvld.parentNode.replaceChild(newelm, kontaktvld);

        return;
    }

    if (cb.checked) {
        i = Math.floor(Math.random() * (animals.length));
        document.getElementById("robot-image").src = "images/kontakt/" + animals[i] + ".jpg";

        document.getElementById("robot-answer").addEventListener('keypress', function (e) {
            if (e.key === 'Enter')
                robot_answer();
        });

        robot_container.style.display = "flex";
        disable_div.style.display = "block";
    }
    else {
        robot_container.style.display = "none";
        disable_div.style.display = "none";
    }
}

function robot_answer() {
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
        error_p.innerHTML = "Porešan odgovor!";
        robot_div.style.border = "0.25em solid red";
        robot_div.style.animation = "shake 0.5s";

        var newelm = robot_div.cloneNode(true);
        robot_div.parentNode.replaceChild(newelm, robot_div);

        document.getElementById("robot-answer").addEventListener('keypress', function (e) {
            if (e.key === 'Enter')
                robot_answer();
        });

        document.getElementById("robot-answer").focus();
    }
}

function robot_exit() {
    document.getElementById("robot-error").innerHTML = "";
    document.getElementById("robot-kontakt").style.animation = "";
    document.getElementById("robot-kontakt").style.border = "0.25em solid rgba(0, 40, 90, 1)";
    document.getElementById("robot-kontakt-container").style.display = "none";
    document.getElementById("robot-disable-page").style.display = "none";
    document.getElementsByName("robot")[0].checked = false;
}

var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++)
    if (inputs[i].type == "checkbox")
        inputs[i].checked = false;