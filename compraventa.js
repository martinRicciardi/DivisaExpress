let formulariocom = document.getElementById("formulario-compra")
let formularioven = document.getElementById("formulario-vender")
const datoscompra = JSON.parse(localStorage.getItem("compra")) || [];
const datosventa = JSON.parse(localStorage.getItem("venta")) || [];

const constructor = (e, valor, datos) => {
    class Datos {
        constructor(nombre, apellidos, dni, telefono, email, moneda, cantidad, id){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.dni = dni;
            this.telefono = telefono;
            this.email = email;
            this.moneda = moneda;
            this.cantidad = cantidad;
            this.id = id;
            this.validado = false;
        }
        validar(){
            this.validado = true
        }
    }
    let id = Math.round(Math.random() * 100000.0)
    
    if(e.target[0].value && e.target[1].value && e.target[2].value && e.target[3].value && e.target[4].value && e.target[5].value && e.target[6].value !== ""){
        alert("gracias por su transaccion")
        datos.push(new Datos(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, id))
        localStorage.setItem(valor, JSON.stringify(datos))
    }else{
        alert("por favor, complete el formulario")
        e.preventDefault()
    }
}

formulariocom.addEventListener("submit", (e) => {
    constructor(e, "compra", datoscompra)
})

formularioven.addEventListener("submit", (e) =>{
    constructor(e, "venta", datosventa)
})