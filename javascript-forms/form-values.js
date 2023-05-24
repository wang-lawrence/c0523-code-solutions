const $form = document.querySelector('form');
const $formControls = $form.elements

function stopReload (event) {
  event.preventDefault();
  const formValues = [];
  formValues['name'] = $formControls.name.value
  formValues['email'] = $formControls.email.value;
  formValues['message'] = $formControls.message.value;
  console.log(formValues)
}

$form.addEventListener('submit', stopReload)
