/*



// Escribe un objeto person, que contenga, nombre, apellidos, edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono


person = {
    name: "Jorge",
    surname: "Marcelles",
    age: "22",
    adress: {
        typeA: "Street",
        nameA: "",
        num: 53,
        cp: 54321,
        location: "Málaga",
    },
    phone: "+34 678 543 210",
};

person.adress.location = "Madrid";
console.log(person);

person.phone = {
    1: "+34 678 543 210",
    2: "+34 678 543 211",
    3: "+34 678 543 212",
}

console.log(person);

// Crear un objeto llamado login con las propiedades y valores respectivamente.
// id => Un número hexadecimal
// state => {logged => verdadero o falso, onLine => verdadero o falso}
// userName => "nombre"
// loginAt: => fecha y hora

let login = {
    id: "0afbc357de69f",
    state: {
        logged: true,
        online: true,
    },
    userName: "Jorge",
    logginAt: "2022/3/28 18:15:30",
}
*/

//------------------------------------------------------------------------------------------------------
// Object literal syntax


let star = {
    name: "Polaris",
    constellation: "Ursa Minor",
    type: "Double/Cepheid",
    spectralClass: "F7",
    mag: 2.0,
  };
  
  // Escribe un objeto person, que contenga, nombre, apellidos,
  // edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono
  let person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    address: {
      streetType: "Boulevard",
      streetName: "Larios",
      num: 53,
      cp: 54321,
      location: "Málaga",
    },
    phone: "+34 678 543 210",
  };
  
  person.address.location = "Madrid";
  console.log(person);
  
  person.phone = {
    1: "+34 678 543 210",
    2: "+34 678 543 211",
    3: "+34 678 543 212",
  };
  
  console.log(person);
  
  // Crear un objeto llamado login con las propiedades y valores respectivamente.
  // id => Un número hexadecimal
  // state => {logged => verdadero o falso, onLine => verdadero o falso}
  // userName => "nombre"
  // loginAt: => fecha y hora

  let login = {
    id: "0afbc357de69f",
    state: {
      logged: false,
      onLine: false,
    },
    userName: "Jane",
    loginAt: "2022/03/28 18:15:30",
  };
  
  // Modifica el objeto person, para que incluya un email y una contraseña
  // Una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login
  // según estos datos sea o no correctos.
  // alert de bienvenida refiriendo el nombre

  // person.email = "john@doe.com";
// person.password = "1234";
// console.log(person);
// let userEmail = prompt("Please, enter your email:");
// let userPass = prompt("Please, enter your password:");

// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();

//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30",
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour<10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
    //     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }