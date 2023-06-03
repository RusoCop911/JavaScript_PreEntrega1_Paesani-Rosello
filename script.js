function validarDatos() {
    let intentos = 0
    let cambio 

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 U$D = $500) \n (D) Dólares americanos a pesos argentinos \n (P) Pesos argentinos a dólares americanos').toUpperCase()

        if (cambio === "D") {
            cambioDolar()
        } else if (cambio === "P") {
            cambioPesos()
        } else {
            alert('ingrese solo "D" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "D" está junto a la "S" y la "P" está pegada a la "O", no es tan difícil')
        validarDatos()
    }
}

function cambioDolar() {

    let dolar = Number(prompt('Ingrese la cantidad de dólares sin decimales o "0" para voler al menú'))

    if (isNaN(dolar)) {
        alert('ingrese cifra numerica')
        cambioDolar()
    } else if (dolar === 0) {
        validarDatos()
    } else {
        alert('La cantidad en pesos seria de' + ' ' + (dolar * 500))
    }
}


function cambioPesos() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menú'))

    if (isNaN(pesos)) {
        alert('ingrese cifra numerica')
        cambioPesos()
    } else if (pesos === 0) {
        validarDatos()
    } else {
        alert('La cantidad en dolar blue seria de' + ' ' + (pesos / 500))
    }
}

validarDatos()
cambioDolar()
cambioPesos()
