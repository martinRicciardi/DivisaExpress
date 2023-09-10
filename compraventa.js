let formulariocom = document.getElementById("formulario_compra")
let formularioven = document.getElementById("formulario_vender")
let boton_compra = document.getElementById("comprar_boton")
let boton_vender = document.getElementById("vender_boton")
let titulo = document.getElementById("titulo")
const datoscompra = JSON.parse(localStorage.getItem("compra")) || [];
const datosventa = JSON.parse(localStorage.getItem("venta")) || [];

boton_compra.addEventListener("click", () => {
    titulo.innerText = "COMPRAR" 
    formulariocom.style.display = "flex"
    formularioven.style.display = "none"
    boton_compra.style.display = "none"
    boton_vender.style.display = "flex"
})

boton_vender.addEventListener("click", () => {
    titulo.innerText = "VENDER" 
    formularioven.style.display = "flex"
    formulariocom.style.display = "none"
    boton_compra.style.display = "flex"
    boton_vender.style.display = "none"
})

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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Gracias por su transaccion!',
            showConfirmButton: false,
            timer: 2000
        })
        datos.push(new Datos(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, id))
        localStorage.setItem(valor, JSON.stringify(datos))
        e.preventDefault()
    }else{
        Swal.fire(
            'Un momento...',
            'Por favor, complete el formulario',
            'error'
        )
        e.preventDefault()
    }
}

formulariocom.addEventListener("submit", (e) => {
    constructor(e, "compra", datoscompra)
})

formularioven.addEventListener("submit", (e) =>{
    constructor(e, "venta", datosventa)
})