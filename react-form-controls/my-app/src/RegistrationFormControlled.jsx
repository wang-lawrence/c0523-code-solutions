import { useState } from "react";

export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Controlled form: {userName: ${userName}, password: ${password}}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Username
        <input value={userName} onChange={e => setUserName(e.target.value)}/>
      </label>
      <label> Password
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
