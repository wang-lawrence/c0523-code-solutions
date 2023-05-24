function handleFocus(event) {
  console.log('focus event was fired!');
  console.log(event.target.name);
}

function handleBlur(event){
  console.log('blur event was fired!');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

const $name = document.querySelector('[name = "name"]');
const $email = document.querySelector('[name = "email"]');
const $message = document.querySelector('[name = "message"]');

$name.addEventListener('focus', handleFocus)
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
