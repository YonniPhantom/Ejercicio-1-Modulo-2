// Ejercicio 1
function ejercicio1() {
    let answer = prompt("Eres bellisimo/a?");
    if (answer.toLowerCase() === "si") {
        alert("Ciertamente");
    } else if (answer.toLowerCase() === "no") {
        alert("No te creo");
    } else {
        alert("?")
    }
}

// Ejercicio 2
function ejercicio2() {
    let answer = prompt("Ingresa un numero");
    if(answer % 2 == 0) {
        alert(`El número ${answer} es divisible entre 2`);
    } else {
        alert(`El número ${answer} no es divisible entre 2`);
    }
}

// Ejercicio 3
function ejercicio3() {
    let answer = prompt("Ingresa un numero");
    if(answer % 2 == 0) {
        alert(`El número ${answer} es par`);
    } else {
        alert(`El número ${answer} no es par`);
    }
}

// Ejercicio 4
function ejercicio4() {
    let answer = prompt("Ingresa un numero de cliente");
    if(answer == 1000) {
        alert("¡Felicidades, ganaste un premio!");
    } else {
        alert(`Lo sentimos #${answer}, sigue participando`);
    }
}

// Ejercicio 5
function ejercicio5() {
    let answer = prompt("Ingresa 2 numeros separador por coma \",\"");
    let numbersArray = answer.split(",");
    alert(`El número ${Math.min(...numbersArray)} es el menor de los ingresados`);
}

// Ejercicio 6
function ejercicio6() {
    let answer = prompt("Ingresa 3 numeros separador por coma \",\"");
    let numbersArray = answer.split(",");
    alert(`El número ${Math.max(...numbersArray)} es el mayor de los ingresados`);
}

// Ejercicio 7
function ejercicio7() {
    let respuesta = prompt("Ingresa un día de la semana:").toLocaleLowerCase();
    if(respuesta == 'lunes') {
        alert("Hoy es lunes, hora de empezar a trabajar!");
    } else if(respuesta == "viernes") {
        alert("Es viernes y el cuerpo lo sabe");
    } else if(respuesta == "sabado" || respuesta == "domingo") {
        alert("A descansar todo el día");
    } else {
        alert("Que tu dia sea productivo");
    }
}

// Ejercicio 8
function ejercicio8() {
    let numero = prompt("Ingresa una calificación (1 - 10):");

    if(numero < 1 || numero > 10) return alert("El numero no está en el rango establecido");

    if(numero < 6) {
        alert("Reprobado");
    } else if(numero >= 6 && numero <= 8) {
        alert("Regular");
    } else if(numero == 9) {
        alert("Bien");
    } else {
        alert("Excelente");
    }
}

// Ejercicio 9
function ejercicio9() {
    let answer = prompt(`
Escoge un topping de la siguiente lista: 
1. Helado sin topping
2. Topping de oreo
3. Topping de KitKat
4. Topping de Brownie
`);

    if(answer == 1) {
        alert("El helado sin topping cuesta $50.00 mxn");
    } else if(answer == 2) {
        alert("EL topping de Oreo cuesta $10.00 mxn");
    } else if(answer == 3) {
        alert("El topping de KitKat cuesta $15.00 mxn");
    } else if(answer == 4) {
        alert("El topping de Brownie cuesta $20.00 mxn");
    } else {
        alert("No disponemos de ese topping");
    }
}

// Ejercicio 10
function ejercicio10() {
    let pagoMensual = 0;
    let program = null;
    let meses = 0;
    let pagoTotal = 0;
    const programa = prompt(`
Escoge tu programa educativo:
1. Course
2. Carrera
3. Master
    `)

    const descuento = prompt(`
¿Cuentas con alguna beca?
1. Beca Facebook
2. Beca Google
3. Beca Jesua
4. No dispongo de beca    
    `)

    if(programa == 1) {
        program = "Course";
        meses = 2;
        if(descuento == 1) {
            pagoMensual = 4999 - (4999 * 0.20);
        } else if(descuento == 2) {
            pagoMensual = 4999 - (4999 * 0.15);
        } else if(descuento == 3) {
            pagoMensual = 4999 - (4999 * 0.50);
        } else {
            pagoMensual = 4999;
        }
        pagoTotal = pagoMensual * meses;
    } else if(programa == 2) {
        program = "Carrera";
        meses = 6;
        if(descuento == 1) {
            pagoMensual = 3999 - (3999 * 0.20);
        } else if(descuento == 2) {
            pagoMensual = 3999 - (3999 * 0.15);
        } else if(descuento == 3) {
            pagoMensual = 3999 - (3999 * 0.50);
        } else {
            pagoMensual = 3999;
        }
        pagoTotal = pagoMensual * meses;
    } else if(programa == 3) {
        program = "Master";
        meses = 12;
        if(descuento == 1) {
            pagoMensual = 2999 - (2999 * 0.20);
        } else if(descuento == 2) {
            pagoMensual = 2999 - (2999 * 0.15);
        } else if(descuento == 3) {
            pagoMensual = 2999 - (2999 * 0.50);
        } else {
            pagoMensual = 2999;
        }
        pagoTotal = pagoMensual * meses;
    }

    alert(`
Tu programa es: ${program}
Con una duración de ${meses} meses
Pago mensual: $${pagoMensual}
Pago total: $${pagoTotal}
    `)
}

//Ejercicio 11
function ejercicio11() {
    let precioKm = 0;
    let precioTotal = 0;
    const vehiculo = prompt(`
Ingresa el tipo de vehiculo:
1. Coche
2. Moto    
3. Autobus
    `);
    const kmRecorridos = prompt("Ingresa los kilometros recorridos:");
    const ltsConsumidos = prompt("Ingresa los litros consumidos:");

    if(vehiculo == 1) {
        precioKm = 0.2;
    } else if(vehiculo == 2) {
        precioKm = 0.1;
    } else if(vehiculo == 3) {
        precioKm = 0.5
    }

    precioTotal = (precioKm * kmRecorridos);

    if(ltsConsumidos >= 0 && ltsConsumidos <= 100) {
        precioTotal += 5;
    } else {
        precioTotal += 10;
    }
}