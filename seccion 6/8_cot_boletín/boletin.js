const notas = [7, 4, 8, 9, 6];

window.onload = function() {
    let ul = document.getElementById("listaNotas");
    for (let i = 0; i < notas.length; i++) {
        ul.innerHTML += "<li>" + notas[i] + "</li>";
    }
};

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let prom = suma / notas.length;
    document.getElementById("resultado").innerHTML = "<h3>Promedio: " + prom + "</h3>";
}

function notaMasAlta() {
    let alta = Math.max(...notas);
    document.getElementById("resultado").innerHTML = "<h3>su nota más alta: " + alta + "</h3>";
}

function hayAplazados() {
    let aplazo = "No";
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 4) {
            aplazo = "Si😂";
        }
    }
    document.getElementById("resultado").innerHTML = "<h3>Va a convo?: " + aplazo + "</h3>";
}