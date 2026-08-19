function calcular() {
    let elementonum1 = document.getElementById("num1");
    let elementonum2 = document.getElementById("num2");
    let elementoRespuesta1 = document.getElementById("respuesta1");

    let num1 = Number(elementonum1.value);
    let num2 = Number(elementonum2.value);

    let resultado = num1 > num2;
    elementoRespuesta1.textContent = resultado;
}
