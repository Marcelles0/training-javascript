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

const cartaRandom = (carta0, palos0, carta1, palos1, clubs, palos) => {
    carta0 = randomNumber(max=12, min=0);
    palos0 = randomNumber(max=3, min=0);
    carta1 = randomNumber(max=12, min=0);
    palos1 = randomNumber(max=3, min=0);
    while (carta0 == carta1 && palos0 == palos1) {
        carta1 = randomNumber(max=12, min=0);
        palos1 = randomNumber(max=3, min=0);
    }
    // console.log(carta0, palos0, carta1, palos1);
    // console.log(clubs[carta0], palos[palos0], clubs[carta1], palos[palos1]);
    return {
        cartaH:carta0,
        palosH:palos0,
        cartaP:carta1,
        palosP:palos1,
    };
}

const playGame = (carta0, palos0, carta1, palos1, palos, win, ask, play, clubs, bet, saldo) =>{
    clubs = ["ACE","KING","QUEEN","JACK",10,9,8,7,6,5,4,3,2];
    let cards = cartaRandom(carta0, palos0, carta1, palos1, clubs, palos);
    
        
    // console.log(clubs[cards.cartaH], palos[cards.palosH], clubs[cards.cartaP], palos[cards.palosP]);

    console.log(`The House -> ${clubs[cards.cartaH]} of ${palos[cards.palosH]}`);
    console.log(`The Player -> ${clubs[cards.cartaP]} of ${palos[cards.palosP]}`);
    if (cards.cartaH < cards.cartaP) {
        alert("You lose \nMore luke next time");
        win = false;
    } else if (cards.cartaH > cards.cartaP) {
        alert("You Win!");
        win = true;
    }else{
        alert("Draw");
    }
    for (let i = 0; i < 1; i++) {
        ask = prompt("You want to play again? \n'y' -> yes \n'n' -> no");
        if (ask == "y") {
            play = true;
        }else if (ask == "n") {
            play = false;
        }else{
            alert("Please, enter a valid answer");
            i--;
        }
    }
    return{
        play: play,
        win: win,
        bet: bet,
        saldo: saldo,
    }
}


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

// exercise6();
function exercise6(){
    // creamos un array con las citas
    let citas = ["“Por la izquierda”",
        "“¿Has oído hablar de la iniciativa vengadores?”",
        "“No tengo nada que demostrarte”",
        "“Es un amigo del trabajo”",
        "“Si no podemos proteger la Tierra, puedes estar seguro de que la vengaremos”",
        "“Soy inevitable”",
        "“Dormammu, he venido a negociar. Dormammu, he venido a negociar. Dormammu, he venido a negociar.”",
        "“El sol se está poniendo”",
        "“Ese es mi secreto, Capi. Siempre estoy enfadado”",
        "“Cueste lo que cueste”",
        "“El precio de la libertad es caro. Siempre lo ha sido. Pero es un precio que estoy dispuesto a pagar”",
        "“Glorioso propósito”",
        "“Todo”",
        "“Nosotros somos Groot”",
        "“Si atraviesas esa puerta, eres una vengadora”",
        "“Es adoptado”",
        "“Tenemos un Hulk”",
        "“Puedo hacer esto todo el día”",
        "“Vengadores, reuníos”",
        "“Yo soy Iron Man”",];
    
    // generamos una función para que el número aleatorio cambie
    const generate =() =>
        randomNumber(max = 19, min = 0);
    // repetir con el intervalo de 2 segundos
    let timerId = setInterval(() => console.log(citas[generate()]), 10000);

    // después de 5 segundos parar
    setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 180000);
}


//--------------------------------------------------------------------------------------
//Ejercicio 7

// exercise7();
function exercise7(){
    let array = new Array (100);
    for (let i = 0; i < 100; i++) {
        array[i] = randomNumber(max=500, min=0);
    }
    console.log(array);
    array = array.filter((arrayNum) => arrayNum % 2 == 0);
    array.sort((a, b) => b - a);
    console.log(array);
}

//--------------------------------------------------------------------------------------
//Ejercicio 8

exercise8();
function exercise8(){
    let clubs = hearts = spades = diamonds = ["ACE","KING","QUEEN","JACK",10,9,8,7,6,5,4,3,2];
    let palos = ["clubs","hearts","spades","diamonds"];
    let saldo = 500;
    let carta0, carta1, palos0, palos1;
    let play = true;
    let win;
    let ask;
    let bet;
    
    // let cards = cartaRandom(carta0, palos0, carta1, palos1, clubs, palos);
    // console.log(clubs[cards.carta0], palos[cards.palos0], clubs[cards.carta1], palos[cards.palos1]);
    do{
        do {
            for (let i = 0; i < 1; i++) {
                bet = parseInt(prompt("How many want you bet?"));
                if (bet > saldo) {
                    alert("You don't have this money");
                    i--;
                }else if (bet < 10) {
                    alert("You have to bet more than 10");
                    i--;
                }
            }
            let continious = playGame(carta0, palos0, carta1, palos1, palos, win, ask, play, clubs, bet, saldo);
            if (continious.play == false) {
                play = false;
            }
            if (continious.win == true) {
                saldo += continious.bet;
            } else {
                saldo -= continious.bet;
                if (saldo == 0) {
                    play = false;
                }
            }
        }while (play == true) 
    }
    while (play == true && saldo > 0) 

    /* for (let i = 0; i < 2; i++) {
        x = (`carta${i}`);
        console.log(x);
        x = diamonds[randomNumber(max=12,min=0)];
        console.log(x);
    } */
}

//--------------------------------------------------------------------------------------
//Ejercicio 9

// exercise9();
function exercise9(){
    // declaramos las variables con los datos del usuario
    let ask = prompt("What you want, encrypt or decrypt? \ne -> Encrypt\nd -> Decrypt");
    let msg = prompt("Write the message to encrypt");
    let msgEn = "";
    let x;
    let encrypt;
    do{
        encrypt = parseInt(prompt("Value of the encrypt or decrypt"));
        if (encrypt == 0 || encrypt%26 == 0) alert("No sense, was the same leter");
    }
    while(encrypt == 0 || encrypt%26 == 0);
    // iniciamos la funcion con los datos recibidos
    cypher(ask, msg, encrypt)
    function cypher(ask,msg,encrypt) {
        if (ask == "e") {
            // si hay que encriptar 
            for (let i = 0; i < msg.length; i++) {
                x = msg.charCodeAt(i) + encrypt;
                //en caso de ser un simbolo, dejarlo tal cual, si se pasa, volver a las letras
                if (x - encrypt < 65 || (x - encrypt > 90 && x - encrypt < 97) || x - encrypt > 122) {
                    x -= encrypt;
                }else if ((x > 90 && x < (97 + encrypt)) || x > 122) {
                    x -= 26;
                }
                msgEn += String.fromCharCode(x);
            }
            console.log(msgEn);
        } else if (ask == "d") {
            // si hay que desencriptar
            for (let i = 0; i < msg.length; i++) {
                x = msg.charCodeAt(i) - encrypt;
                // igual que el anterior
                if (x + encrypt < 65 || (x + encrypt > 90 && x + encrypt < 97) || x + encrypt > 122) {
                    x += encrypt;
                }else if ((x > (90 - encrypt) && x < 97) || x < 65) {
                    x += 26;
                }
                msgEn += String.fromCharCode(x);
            }
            console.log(msgEn);
        }else{// si no hay algun dato validos
            alert("Invalid value or values entered");
        }
    }
}