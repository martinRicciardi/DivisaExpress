const datos = [];

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let dni = prompt("Ingrese su dni")
let moneda = prompt("Ingrese que moneda quiere comprar").toUpperCase()
let cantidad = Number(prompt("Ingrese que cantidad quiere comprar"))

//estos datos van a ser todos ingresados mediante inputs cuando sea lo requerido avanzar con eso en las preentregas

class Datos {
    constructor(nombre, apellidos, dni, moneda, cantidad, id){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.moneda = moneda;
        this.cantidad = cantidad;
        this.id = id;
        this.validado = false;
    }
    validar(){
        this.validado = true
    }
}

let id = Math.round(Math.random() * 1000000)

datos.push(new Datos(nombre, apellido, dni, moneda, cantidad, id))

datos.forEach((item) => {alert(`Datos del comprador: Nombre: ${item.nombre} Apellido: ${item.apellidos} DNI: ${item.dni} Moneda: ${item.moneda} Cantidad: ${item.cantidad} Validado: ${item.validado} ID de transaccion: #${item.id}`)})