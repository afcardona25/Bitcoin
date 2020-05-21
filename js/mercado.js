function validate() {
    return true
}

let search = window.location.search.substring(6)
var comprar = new Date().getFullYear();
if (search) comprar = window.location.search.substring(6)
console.log(comprar)


goToYear = () => {
    let comprar = document.getElementById("comprar").children[1].value;
    console.log("Year: ", year)
    window.location.replace(`?comprar=${comprar}`);
}