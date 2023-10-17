let compra = JSON.parse(localStorage.getItem("compra"))
let venta = JSON.parse(localStorage.getItem("venta"))
let cardcom = document.getElementById("card-compra")
let cardven = document.getElementById("card-venta")
let noHay = document.getElementById("trans-container")

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
        <button id="${item.id}">ELIMINAR</button>
    </div>`

    card.append(div)

    let botonBorrar = document.getElementById(item.id)
    botonBorrar.addEventListener("click", () => {
        Swal.fire({
            title: 'Borrar transaccion',
            text: "¿Estas seguro de eliminar tu transaccion?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                for (let i = 0; i < localStorage.length; i++) {
                    let claves = localStorage.key(i);
                    let allObj = JSON.parse(localStorage.getItem(claves))
                    let objGuard = allObj.filter(e => e.id != item.id)
                    localStorage.setItem(claves, JSON.stringify(objGuard))
                    location.reload()
                }
            }
        })
    })
}

const crearCards = () => {
    if(venta.length === 0 && compra.length === 0){
        localStorage.clear()
        location.reload()
    }else {
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
}

compra || venta ? 
crearCards()
:
noHay.innerHTML = `<p class="nohay">No hay transacciones en este momento</p>`