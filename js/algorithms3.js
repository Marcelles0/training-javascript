//Functions
const randomNumber = (max,min) =>
    Math.floor(Math.random()*(max-min+1) + min);


const comprobarDNI =(dni,valid) => {
    // creamos una array con los valores ASCII posibles en funcion del resto
    let arrayDNI = [84, 82, 87, 65, 71, 77, 89, 70, 80, 68, 88, 66, 78, 74, 90, 83, 81, 86, 72, 76, 67, 75, 69];
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
                    let numsDNI = dni.slice(0,8);
                    let rest = numsDNI%23;
                    // comprobamos que el resto y la letra correspondiente coincidan
                    if ((rest == 0 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 1 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 2 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 3 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 4 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 5 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 6 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 7 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 8 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 9 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 10 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 11 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 12 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 13 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 14 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 15 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 16 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 17 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 18 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 19 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 20 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 21 && dni.charCodeAt(8) == arrayDNI[rest]) ||
                        (rest == 22 && dni.charCodeAt(8) == arrayDNI[rest])){
                            valid = true;
                            console.log("Valid DNI");
                    }else {
                        console.log("This letter don't coincide with a valid DNI");
                        valid = false;
                    }
                } else{
                    //DNI wrong
                    console.log("Please enter a valid DNI");
                    valid = false;
                }
            }
        }else {
            // No valid DNI
            console.log("Please enter a valid data");
            valid = false;
        }
    }else{
        // length != 9
        console.log("Please enter a valid data");
        valid = false;
    }
}


// const antiError = (ask) =>{
//     for (let i = 0; i < 1; i++) {
//         ask = parseInt(prompt("How many plates do you want?"));
//         if (ask < 0) {
//             alert("You need a positive number");
//             i--;
//         }
//     }
// }


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

// exercise4();
function exercise4() {
    // pedimos un DNI
    let dni = prompt("Enter a valid DNI");
    // variable valid innecesaria?
    let valid = true;
    // le pasamos el DNI a la funcion para que lo compruebe
    comprobarDNI(dni,valid);
    console.log(dni);
    //Bonus--------------------
    // generateDNI();
    function generateDNI(){
        let arrayDNI = [84, 82, 87, 65, 71, 77, 89, 70, 80, 68, 88, 66, 78, 74, 90, 83, 81, 86, 72, 76, 67, 75, 69];
        let ask = 0;
        // preguntamos cuantos DNI quiere
        for (let i = 0; i < 1; i++) {
            ask = parseInt(prompt("How many DNIs do you want?"));
            if (ask < 0) {
                alert("You need a positive number");
                i--;
            }
        }
        // generamos numeros aleatrios de 8 digitos
        for (let i = 0; i < ask; i++) {
            let dniRandom = randomNumber(max=99999999,min=0);
            let letter = dniRandom%23;
            // generamos una letra en funcion del resto del numero generado
            dniRandom += String.fromCharCode(arrayDNI[letter]);
            // lo comprobamos con la funcion
            comprobarDNI(dniRandom,valid);
            if (valid == true) {
                console.log(dniRandom);
            }else{
                i--;
            }
        }
    }
}

//--------------------------------------------------------------------------------------
//Ejercicio 5

// exercise5();
function exercise5(){
    //preguntamos cuantas matriculas 
    let ask = 0;
    for (let i = 0; i < 1; i++) {
        ask = parseInt(prompt("How many plates do you want?"));
        if (ask < 0) {
            alert("You need a positive number");
            i--;
        }
    }
    // generamos los 4 numeros
    for (let i = 0; i < ask; i++) {
        let matricula = "";
        for (let j = 0; j < 4; j++) {
            matricula += String.fromCharCode(randomNumber(max=57,min=48));
        }
        //generamos las 3 letras
        for (let j = 0; j < 3; j++) {
            let letter = randomNumber(max=90,min=66);
            if (letter != 69 &&
                letter != 73 &&
                letter != 79 &&
                letter != 81 &&
                letter != 85) {
                    matricula += String.fromCharCode(letter);
            }else{
                j--;
            }
        }
        console.log(matricula);
    }
}

//--------------------------------------------------------------------------------------
//Ejercicio 6

exercise6();
function exercise6(){
    
}