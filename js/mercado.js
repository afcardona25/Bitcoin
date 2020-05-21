function validate() {
    return true
}

let search = window.location.search.substring(6)
var comprar = new Date().getFullYear();
if (search) comprar = window.location.search.substring(6)
console.log(comprar)

var suma = function(numero1, numero2) {

    //parseFloat transforma una cadena de texto en entero   
    //parseInt transforma una cadena de texto en decimales
    var compra = parseFloat(document.getElementById("compra").value);
    var venta = parseFloat(document.getElementById("venta").value);
    var resultado = compra + venta;
    document.getElementById("total").innerHTML = resultado
}
goToYear = () => {
    let comprar = document.getElementById("comprar").children[1].value;
    console.log("Year: ", year)
    window.location.replace(`?comprar=${comprar}`);
}