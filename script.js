// console.log ("HOLA MUNDO")

// let nombre = "Franco"
// console.log (nombre)

// let apellido = "Paesani Rosello"
// console.log (apellido)

// let nombreCompleto = nombre + " " + apellido
// console.log (nombreCompleto)

// let edad = 32
// console.log (edad)

// ....................................

// let nombre = prompt ('Ingrese Nombre')
// let apellido = prompt ('Ingrese Apellido')

// let nombreCompleto = nombre + ' ' + apellido
// console.log (nombreCompleto)
// alert (nombreCompleto)

// let anioNacimiento = prompt ('Ingrese Año de Nacimiento')
// console.log (anioNacimiento)

// .....................................

// let edad = Number(prompt('Ingrese Edad'))

// if (!isNaN(edad)) {
//     if (edad > 18) {
//         alert('Bienvenido!')
//     } else if (edad < 18) {
//         alert('-Acceso Denegado- \n(Seguí tomando Danonino)')
//     }
// } else {
//     alert('Poné números GIL')
// }

// ......................................

// let numero = Number(prompt('ingrese un numero'))
// let opcion
// let mensaje = "Pone un numero"

// do {
//     do {
//         opcion = Number(prompt(mensaje))
//         // for (let i = numero; i < 4; i++) {
//         // alert(i)
//         // }
//     } while (isNaN(opcion))
// } while (opcion !== 0)




function validarDatos() {

    let cambio = prompt('Que desea convertir? \n (1 U$D = $500) \n (D) Dolares americanos a pesos argentinos \n (P) Pesos argentinos a dolares americanos').toUpperCase()

    if (cambio === "D") {
        cambioDolar()
    } else if (cambio === "P") {
        cambioPesos()                                                           
    } else {
        alert('ingrese solo "D" o "P" sin comillas')
        validarDatos()
    }
}

function cambioDolar() {

    let dolar = Number(prompt('Ingrese la cantidad de dolares sin decimales o "0" para voler al menu'))

    if (isNaN(dolar)) {
        alert('ingrese cifra numerica')
        cambioDolar()
    } else if (dolar === 0) {
        validarDatos()
    } else {
        alert('La cantidad en pesos seria de' + ' ' + (dolar*500))
    }
}


function cambioPesos() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menu'))
    
    if (isNaN (pesos)) {
        alert('ingrese cifra numerica')
        cambioPesos()
    } else if (pesos === 0) {
        validarDatos()
    }else {
        alert('La cantidad en dolar blue seria de' + ' ' + (pesos/500))
    }
}

validarDatos()
cambioDolar()
cambioPesos()






// let dolar = Number(prompt('Ingrese cantidad de dolares americanos'))
// // let pesos = Number(prompt('Ingrese cantidad de pesos argentinos'))

// if (isNaN(dolar)) {
//     alert('ingrese valores en numeros sin decimales')
// } else {
//     if (dolar >= 1 / 500)
//     alert('la cantidad total de pesos argentinos son')
//     else {
//         if (dolar < 1)
//         alert('Ingrese un monto superior a 1 sin decimales')
//     }
    
// }