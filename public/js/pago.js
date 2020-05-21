window.addEventListener("load", function() {
    this.document.getElementById("loader").classList.toggle("loader2")
})

var pago1 = document.getElementById("pago1");
var pago2 = document.getElementById("pago2");
var pago3 = document.getElementById("pago3");
var tarjeta = document.getElementById("tarjeta");
var cvv = document.getElementById("cvv");
var vencimiento = document.getElementById("vencimiento");
var codigo = document.getElementById("codigo");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario() {
    console.log("Enviando formulario...");

    if (pago1.value === null || pago1.value === "") {
        alert("Ingrese su pago1");
        e.preventDefault();
    }

    if (pago2.value === null || pago2.value === "") {
        alert("Ingrese su pago2");
        e.preventDefault();
    }
    if (pago3.value === null || pago3.value === "") {
        alert("Ingrese su pago3");
        e.preventDefault();
    }
    if (tarjeta.value === null || tarjeta.value === "") {
        alert("Ingrese su numero de tarjeta");
        e.preventDefault();
    }
    if (cvv.value === null || cvv.value === "") {
        alert("Ingrese su cvv");
        e.preventDefault();
    }
    if (vencimiento.value === null || vencimiento.value === "") {
        alert("Ingrese su numero de vencimiento");
        e.preventDefault();
    }

    if (codigo.value === null || codigo.value === "") {
        alert("Ingrese su codigo");
        e.preventDefault();
    }

    if (enviarFormulario == pago1 || pago2 || pago3 && tarjeta && cvv && vencimiento && codigo) {
        alert("Pago exitoso")
        e.preventDefault();
    }

    return false
}