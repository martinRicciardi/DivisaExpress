let formulario = document.getElementById("formulario")
const datos = JSON.parse(localStorage.getItem("datos")) || [];

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    
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
    
    let id = Math.round(Math.random() * 100000.0)
    
    datos.push(new Datos(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, id))
    
    localStorage.setItem("datos", JSON.stringify(datos))
})