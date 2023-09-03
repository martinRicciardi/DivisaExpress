let compra = JSON.parse(localStorage.getItem("compra"))
let venta = JSON.parse(localStorage.getItem("venta"))
let cardcom = document.getElementById("card-compra")
let cardven = document.getElementById("card-venta")

const cards = (item, card) => {
    let div = document.createElement("div")

    div.innerHTML = 
    `<p>Nombre: ${item.nombre}</p>
    <p>Apellido: ${item.apellidos}</p>
    <p>DNI: ${item.dni}</p>
    <p>Telefono: ${item.telefono}</p>
    <p>Email: ${item.email}</p>
    <p>Moneda: ${item.moneda}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>ID de transaccion: #${item.id}</p>
    <br>`

    card.append(div)
}

if(venta){
venta.forEach(item => {
    cards(item, cardven)
});
compra.forEach(item => {
    cards(item, cardcom)
});}
else if(compra){
compra.forEach(item => {
    cards(item, cardcom)
});
venta.forEach(item => {
    cards(item, cardven)
});
}

