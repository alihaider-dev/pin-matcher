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
    console.log(number);
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