function Recomendacion() {
    const valPresupuesto = document.getElementById("presupuesto").value;
    const valPersonas = document.getElementById("personas").value;
    const valCategoria = document.getElementById("categoria").value;
    const divSalida = document.getElementById("resultado");

    if (valPresupuesto === "" || valPersonas === "" || valCategoria === "") {
        divSalida.innerHTML = "<p>debe poner todos los datos</p>";
        return;
    }

    const numPresupuesto = Number(valPresupuesto);
    const numPersonas = Number(valPersonas);

    if (numPresupuesto < 0 || numPersonas <= 0 || !Number.isInteger(numPersonas)) {
        divSalida.innerHTML = "<p>Ë̴̖͖́̽̾R̷̢̛̛̥̤̬̼̂͑͆̄̽̾͊̒̃͗̕̚͝R̶̡̢̟̯̦̟͔͓̳͎̜̒̈́̈́̐̓̆̾̐̏͘͜͝͝O̴̩̭͌́̽̔͆̍̉̐̊́̈́͒͐̚R̶̯̞̥̲̻͙̖̩̙̝̱̯̻͓͍̂̐̃͑́͑̈͊̕͜</p>";
        return;
    }

    let recomendacion = "";

    switch (valCategoria) {
        case "Deportes":
            if (numPresupuesto < 8000) {
                recomendacion = "Caminata recreativa";
            } else if (numPresupuesto <= 15000) {
                recomendacion = "Alquiler de cancha";
            } else {
                recomendacion = "Actividad deportiva especializada";
            }
            break;

        case "Entretenimiento":
            if (numPresupuesto < 8000) {
                recomendacion = "Actividad económica";
            } else if (numPresupuesto <= 15000) {
                recomendacion = "Entrada al cine";
            } else {
                recomendacion = "Concierto o espectáculo";
            }
            break;

        case "Turismo":
            if (numPresupuesto < 8000) {
                recomendacion = "Visita a parque público";
            } else if (numPresupuesto <= 15000) {
                recomendacion = "Tour local";
            } else {
                recomendacion = "Excursión de día completo";
            }
            break;

        case "Actividades familiares":
            if (numPresupuesto < 8000) {
                recomendacion = "Picnic familiar";
            } else if (numPresupuesto <= 15000) {
                recomendacion = "Salida recreativa";
            } else {
                recomendacion = "Parque temático o actividad especial";
            }
            break;
    }

    let Porcentajedescuento = 0;

    if (numPersonas <= 4) {
        Porcentajedescuento = 0;
    } else if (numPersonas <= 8) {
        Porcentajedescuento = 10;
    } else {
        Porcentajedescuento = 15;
    }

    const totalDescuento = numPresupuesto * (Porcentajedescuento / 100);
    const presupuestoTotal = numPresupuesto - totalDescuento;

    divSalida.innerHTML =
        "<h3>Resumen:</h3>" +
        "<p>Actividad recomendada: " + recomendacion + "</p>" +
        "<p>Numero de personas: " + numPersonas + "</p>" +
        "<p>Porcentaje de descuento: " + Porcentajedescuento + "%</p>" +
        "<p>Total descuento: ₡" + totalDescuento + "</p>" +
        "<p>Total con el descuento: ₡" + presupuestoTotal + "</p>";
}

function limpiarFormulario() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("categoria").selectedIndex = 0;
    document.getElementById("resultado").innerHTML = "";
}