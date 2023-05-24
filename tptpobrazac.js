function show_all()
{
    document.getElementById("cpu-proizvodi").style.display = "block";
    document.getElementById("gpu-proizvodi").style.display = "block";
    document.getElementById("ram-proizvodi").style.display = "block";
}

function show_cpu()
{
    document.getElementById("cpu-proizvodi").style.display = "block";
    document.getElementById("gpu-proizvodi").style.display = "none";
    document.getElementById("ram-proizvodi").style.display = "none";
}

function show_gpu()
{
    document.getElementById("cpu-proizvodi").style.display = "none";
    document.getElementById("gpu-proizvodi").style.display = "block";
    document.getElementById("ram-proizvodi").style.display = "none";
}

function show_ram()
{
    document.getElementById("cpu-proizvodi").style.display = "none";
    document.getElementById("gpu-proizvodi").style.display = "none";
    document.getElementById("ram-proizvodi").style.display = "block";
}