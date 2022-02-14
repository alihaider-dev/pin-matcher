function getPin() {
  const randomPin = Math.round(Math.random() * 10000);
  const pinString = randomPin + '';
  if (pinString.length == 4) {
    return randomPin;
  }
  else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById('pin-input').value = pin;
}

document.getElementById('keypad').addEventListener('click', function (event) {

  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if (isNaN(number)) {
    // console.log(number);
    if (number == 'C') {
      calcInput.value = '';
    }
  }
  else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
})

function verifyPin() {
  // console.log('clicked');
  const generatedPin = document.getElementById('pin-input').value;
  const verifyPin = document.getElementById('typed-numbers').value;

  const pinSuccess = document.getElementById('success');
  const pinFailed = document.getElementById('fail');
  if (generatedPin == verifyPin) {

    pinSuccess.style.display = 'block';
    pinFailed.style.display = 'none';
  }
  else {

    pinFailed.style.display = 'block';
    pinSuccess.style.display = 'none';
  }
}