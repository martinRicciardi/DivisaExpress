let compra = JSON.parse(localStorage.getItem("compra"))
let venta = JSON.parse(localStorage.getItem("venta"))
let cardcom = document.getElementById("card-compra")
let cardven = document.getElementById("card-venta")
let noHay = document.getElementById("trans-container")
let borrarCompras = document.getElementById("eliminar-compra")
let borrarVentas = document.getElementById("eliminar-venta")

borrarCompras.addEventListener("click", () => {
    Swal.fire({
        title: 'Borrar compras',
        text: "¿Estas seguro de eliminar tus compras?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("compra")
            location.reload()
        }
    })
})
borrarVentas.addEventListener("click", () => {
    Swal.fire({
        title: 'Borrar ventas',
        text: "¿Estas seguro de eliminar tus ventas?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("venta")
            location.reload()
        }
    })
})

const cards = (item, card) => {
    let div = document.createElement("div")

    div.innerHTML = 
    `<div class="card-datos">
        <p>NOMBRE: ${item.nombre}</p>
        <p>APELLIDO: ${item.apellidos}</p>
        <p>DNI: ${item.dni}</p>
        <p>TELEFONO: ${item.telefono}</p>
        <p>EMAIL: ${item.email}</p>
        <p>MONEDA: ${item.moneda}</p>
        <p>CANTIDAD: ${item.cantidad}</p>
        <p>ID DE TRANSACCION: #${item.id}</p>
    </div>`

    card.append(div)
}

const crearCards = () => {
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
}

compra || venta ? 
crearCards()
:
noHay.innerHTML = `<p class="nohay">No hay transacciones en este momento</p>`