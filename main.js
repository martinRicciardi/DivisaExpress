const inicio = () => {  
let consulta = prompt("Quiere comprar o vender")

while(consulta !== "comprar" && consulta !== "vender"){
    alert("Esa opcion no esta disponible")
    consulta = prompt("Quiere comprar o vender")
}
if(consulta === "comprar"){
    dolar()
}else if(consulta === "vender"){
    venderUsd()
}
}

const dolar = () => {
    let cantidad = Number(prompt("¿Cuanto quiere comprar?"))

    while(cantidad <500 || cantidad >10000){
        if(cantidad <500){
            alert("El monto minimo es 500 USD")
        }else if(cantidad >10000){
            alert("Ese monto no esta disponible")
        }
        cantidad = Number(prompt("¿Cuanto quiere comprar?")) 
    }
    alert(`El total seria ${cantidad * 550} pesos`)
    dni()
}

// const euro = () => {
//     let cantidad = Number(prompt("¿Cuanto quiere comprar?"))

//     while(cantidad <400 || cantidad >8000){
//         switch(cantidad){
//             case cantidad < 400:
//                 alert("El monto minimo es 400 Euros");
//                 break;
//             case cantidad > 8000:
//                 alert("Ese monto no esta disponible");
//                 break;
//             default:
//                 break;
//         }
//         cantidad = Number(prompt("¿Cuanto quiere comprar?"))
//     }
//     alert(`El total seria ${cantidad * 290} pesos`)
//     dni()
// }

const venderUsd = () => {
    let cantidad = Number(prompt("¿Cuanto quiere vender?"))

    while(cantidad <500 || cantidad >10000){
        if(cantidad <500){
            alert("El monto minimo es 500 USD")
        }else if(cantidad >10000){
            alert("Ese monto es muy elevado")
        }
        cantidad = Number(prompt("¿Cuanto quiere vender?")) 
    }
    alert(`Recibira un total de ${cantidad * 520} pesos`)
    dni()
} 

const dni = () => {
let numDni = Number(prompt("Ingrese su numero de dni para finalizar la transaccion"))

    while(numDni < 9000000){
        alert("ingrese un dni valido")
        numDni = Number(prompt("Ingrese su numero de dni para finalizar la transaccion"))
    }
    alert("Gracias por la transaccion")
} 

inicio()