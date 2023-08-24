let storage = JSON.parse(localStorage.getItem("datos"))
let card = document.getElementById("card-container")

storage.forEach(item => {
    let div = document.createElement("div")

    div.innerHTML = 
    `<p>Nombre: ${item.nombre}</p>
    <p>Apellido: ${item.apellidos}</p>
    <p>DNI: ${item.dni}</p>
    <p>Moneda: ${item.moneda}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>ID de transaccion: #${item.id}</p>
    <button id="boton">Eliminar</button>
    <br>`

    card.append(div)
});

let boton = document.getElementById("boton")

const borrar = () => {
    localStorage.removeItem("datos")
    window.location.reload()
}
boton.addEventListener("click", () => borrar())
