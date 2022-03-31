//Functions
const randomNumber = (max,min) =>
        Math.floor(Math.random()*(max-min+1) + min);


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

//Ejercicio 1

// exercise1();
function exercise1() {
    let min;
    let max;
    // pedimos los valores mínimos y máximos
    for (let i = 0; i < 1; i++) {
        min = parseInt(prompt("Enter the minimum value"));
        max = parseInt(prompt("Enter the maximum value"));
        if (min > max) {
            alert("The minimum value can't be bigger than the maximum value");
            i--;
        }
    }

    // // hacemos una función para llamar al random number
    // const randomNumber = (max,min) =>
    //     Math.floor(Math.random()*(max-min+1) + min);

    // creamos el array de 20
    let array = new Array(20);
    // le agregamos a cada hueco del array un valor aleatorio entre el mínimo y el máximo llamando a la función
    for (let i = 0; i < array.length; i++) {
        let num = randomNumber(max, min);
        array[i] = num;
    }
    console.log(`min value: ${Math.min(...array)}`);
    console.log(`max value: ${Math.max(...array)}`);
}

//--------------------------------------------------------------------------------------
//Ejercicio 2

// exercise2();
function exercise2() {
    // creamos una variable con los datos de la hora del día al crearse
    let day = new Date;
    let hour = day.getHours();
    // ponemos las condiciones en funcion de la hora
    if (hour >= 6 && hour < 12) {
        alert("Good morning!");
    }else if (hour >= 12 && hour < 21) {
        alert("Good evening!");
    } else {
        alert("Good nigth!");
    }
}

//--------------------------------------------------------------------------------------
//Ejercicio 3

//exercise3();
function exercise3() {
    let max= 102;
    let min= 48;
    let num2;
    let hello = "Hello World!";
    let hexaCode="";
    for (let i = 0; i < 10; i++) {
        hexaCode="";
        for(let j=0;j<6;j++){
            let num = Math.floor(Math.random()*(max-min+1) + min);
            if (num == num2) {
                j--;
            }else{
                if (num > 57 && num<97) {
                    j--;
                }else{
                    hexaCode += String.fromCharCode(num);
                    num2=num;
                }
            }         
        }
        console.log(`${hello.fontcolor(`${hexaCode}`)}`);
    }
}

//--------------------------------------------------------------------------------------
//Ejercicio 4

exercise4();
function exercise4() {
    let dni = prompt("Enter a valid DNI");
    if (dni.length == 9) {
        if (48 <= dni.charCodeAt(0) <= 57) {
            // comprobar que el último caracter es una letra mayuscula
            if (65 <= dni.charCodeAt(dni.length -1) <= 90) {
                // comprobar que todos los caracteres sean correctos
                if (dni.charCodeAt(1) >= 48 &&
                dni.charCodeAt(1) <= 57 &&
                dni.charCodeAt(2) >= 48 &&
                dni.charCodeAt(2) <= 57 &&
                dni.charCodeAt(3) >= 48 &&
                dni.charCodeAt(3) <= 57 &&
                dni.charCodeAt(4) >= 48 &&
                dni.charCodeAt(4) <= 57 &&
                dni.charCodeAt(5) >= 48 &&
                dni.charCodeAt(5) <= 57 &&
                dni.charCodeAt(6) >= 48 &&
                dni.charCodeAt(6) <= 57 &&
                dni.charCodeAt(7) >= 48 &&
                dni.charCodeAt(7) <= 57 &&
                dni.charCodeAt(8) >= 65 &&
                dni.charCodeAt(8) <= 90) {
                    // DNI correct
                    console.log("Valid DNI")
                } else{
                    //DNI wrong
                    console.log("Please enter a valid DNI");
                }
            }
        }else {
            // No valid DNI
            console.log("Please enter a valid data");
        }
    }else{
        // length != 9
        console.log("Please enter a valid data");
    }
}