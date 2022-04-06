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