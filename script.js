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