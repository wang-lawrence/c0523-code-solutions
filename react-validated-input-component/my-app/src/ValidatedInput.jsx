import './styles.css'
import { useState } from 'react'

export default function ValidatedInput() {
  const [checkMark, setCheckMark] = useState(false);
  const [message, setMessage] = useState('');

  function handleChange(e) {
    if (e.target.value === '') {
      setCheckMark(false);
      setMessage('A password is requried')
    } else if (e.target.value.length < 8) {
      setCheckMark(false);
      setMessage('Your password is too short');
    } else if (!/[0-9]/.test(e.target.value)) {
      setCheckMark(false);
      setMessage('Your password needs to contain at least one number');
    } else if (!/[A-Z]/.test(e.target.value)) {
      setCheckMark(false);
      setMessage('Your password needs to contain at least one capital letter');
    } else if (!/[!@#$%^&*()]/.test(e.target.value)) {
      setCheckMark(false);
      setMessage('Your password needs to contain at least one special character: !, @, #, $, %, ^, &, *, (, or )');
    } else {
      setCheckMark(true);
      setMessage(' ');
    }
  }

  return (
   <div className = "form-group">
      <label htmlFor="inputPassword5" className="form-label col-sm-12 ml-2" id="password-label">Password</label>
      <input type="password" id="inputPassword5" className="form-control w-50" aria-labelledby="passwordHelpBlock" onChange={handleChange} />
      {message && (checkMark ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>)}
      <small id="passwordHelpBlock" className="form-text">{message} </small>
   </div>
  )
}
