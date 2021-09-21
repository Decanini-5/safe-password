// function generatePasswordFromFile() {
//   let pswd;
//   const arr = [
//     33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55,
//     56, 57, 58, 59, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
//     77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 96, 97,
//     98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
//     113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 126,
//   ];

//   let ch1 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);

//   ch1 = arr[Math.floor(Math.random() * arr.length)];
//   if (ch1 === 45 || ch1 === 46) {
//     ch1 = arr[Math.floor(Math.random() * arr.length)];
//     pswd = String.fromCharCode(ch1);
//   } else {
//     pswd = String.fromCharCode(ch1);
//   }

//   const ch2 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch3 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch4 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch5 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch6 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch7 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);
//   const ch8 = String.fromCharCode(arr[Math.floor(Math.random() * arr.length)]);

//   pswd += ch2 + ch3 + ch4 + ch5 + ch6 + ch7 + ch8;

//   console.log(pswd);
//   console.log(arr.length);

//   return pswd;

//   // falta evitar que se inicie con '.' o '-' (por regla)
//   // podría mejorarse con un ciclo FOR
//   // podría mejorarse el método para obtener uno de los carácteres permitidos
// }

function generatePasswordFromFile() {
  const pswd = [];
  // podría mejorarse el método para obtener uno de los carácteres permitidos
  const arr = [
    33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
    77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 126,
  ];
  const numberOfCharacters = 8;

  for (let i = 0; i < numberOfCharacters; i += 1) {
    let ch1 = arr[Math.floor(Math.random() * arr.length)];

    // falta evitar que se inicie con '.' o '-' (por regla)
    if (ch1 === 45 || ch1 === 46) {
      ch1 = arr[Math.floor(Math.random() * arr.length)];
      pswd.push(String.fromCharCode(ch1));
    } else {
      pswd.push(String.fromCharCode(ch1));
    }
  }

  return pswd.join('');
}

export default generatePasswordFromFile;
