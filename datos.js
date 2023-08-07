const datos = [];

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let dni = prompt("Ingrese su dni")
let moneda = prompt("Ingrese que moneda quiere comprar").toUpperCase()
let cantidad = Number(prompt("Ingrese que cantidad quiere comprar"))

class Datos {
    constructor(nombre, apellidos, dni, moneda, cantidad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.moneda = moneda;
        this.cantidad = cantidad;
        this.validado = false;
    }
    validar(){
        this.validado = true
    }
}

datos.push(new Datos(nombre, apellido, dni, moneda, cantidad))

datos.forEach((item) => {alert(`Datos del comprador: Nombre: ${item.nombre} Apellido: ${item.apellidos} DNI: ${item.dni} Moneda: ${item.moneda} Cantidad: ${item.cantidad} Validado: ${item.validado}`)})