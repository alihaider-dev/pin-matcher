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