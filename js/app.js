function generatePin() {
  // console.log("clicked");
  const randomPin = Math.round(Math.random() * 10000);
  console.log(randomPin);

  const pinInput = document.getElementById('pin-input');
  pinInput.value = randomPin;
}