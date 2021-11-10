function generatePasswordFromFile() {
  const pswd = [];
  const numberOfCharacters = document.getElementById('pwL').value;
  const ttError = document.querySelector('.tt-error');
  let ch1 = Math.floor(Math.random() * (127 - 33)) + 33;

  if (numberOfCharacters < 6) {
    ttError.style.visibility = 'visible';
    window.setTimeout(() => {
      ttError.style.visibility = 'hidden';
    }, 3000);
    document.getElementById('pwL').value = 6;
    return pswd;
  }
  while ([34, 39, 44, 45, 46, 47, 60, 62, 92, 94, 123, 124, 125].includes(ch1)) {
    ch1 = Math.floor(Math.random() * (127 - 33)) + 33;
  } pswd.push(String.fromCharCode(ch1));
  for (let i = 1; i < numberOfCharacters; i += 1) {
    let char = Math.floor(Math.random() * (127 - 33)) + 33;
    while ([34, 39, 44, 47, 60, 62, 92, 94, 123, 124, 125].includes(char)) {
      char = Math.floor(Math.random() * (127 - 33)) + 33;
    } pswd.push(String.fromCharCode(char));
  }

  return pswd.join('');
}

export default generatePasswordFromFile;
