var saldo = 3000
document.getElementById("saldo").innerHTML = saldo
var historico = [] 
var tabla = document.getElementById("historicoTabla")
var precioMercado = Math.floor(Math.random() * (120 - 40)) + 40
document.getElementById("precio").innerHTML = precioMercado +" "
document.getElementById("saldoDolar").innerHTML = saldo*precioMercado+" "
function getRandomRecommendation(){
   var random = Math.floor(Math.random() * 3)
   if(random == 1){
       document.getElementById("recomendacion").innerHTML = "Comprar Ahora"
       document.getElementById("recomendacion").style.color = "green"
       return true
   } 
   if(random == 0){
    document.getElementById("recomendacion").innerHTML = "Vender Ahora"
    document.getElementById("recomendacion").style.color = "green"
    return true
} 
if(random == 2){
    document.getElementById("recomendacion").innerHTML = "Esperar"
    document.getElementById("recomendacion").style.color = "red"
    return true
} else{
    return false
}

}
getRandomRecommendation()
function comprar(){
    var monto = Number(document.getElementById("amount").value)
    saldo += monto
    var linea = tabla.insertRow(0)
    var fecha = linea.insertCell(0)
    var tipo = linea.insertCell(1)
    var bitcns = linea.insertCell(2)
    var equivUSD = linea.insertCell(3)
    fecha.innerHTML = new Date()
    tipo.innerHTML = "compra"
    bitcns.innerHTML = monto
    equivUSD.innerHTML = monto*precioMercado
    document.getElementById("saldo").innerHTML = saldo+" "
    document.getElementById("saldoDolar").innerHTML = saldo*precioMercado+" "
    window.open("pago.html")
}
function vender(){
    var monto = Number(document.getElementById("amount").value)
    saldo -= monto
    var linea = tabla.insertRow(0)
    var fecha = linea.insertCell(0)
    var tipo = linea.insertCell(1)
    var bitcns = linea.insertCell(2)
    var equivUSD = linea.insertCell(3)
    fecha.innerHTML = new Date()
    tipo.innerHTML = "venta"
    bitcns.innerHTML = monto
    equivUSD.innerHTML = monto*precioMercado
    document.getElementById("saldo").innerHTML = saldo+" "
    document.getElementById("saldoDolar").innerHTML = saldo*precioMercado+" "
    alert("Se ha hecho una consignacion a su cuenta de ahorros por: " + monto*precioMercado)
}