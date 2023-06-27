export default function RegistrationFormUncontrolled() {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Uncontrolled form: ', Object.fromEntries(formData.entries()));
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username: <input type='text' name="userName"/>
      </label>
      <label>
        Password: <input type='password' name="password"/>
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
