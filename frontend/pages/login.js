
import { useState } from 'react'
import axios from 'axios'

export default function Login () {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const user = {
      identifier: mail,
      password: password
    }

 
    try {
      const response = await axios.post("http://localhost:1337/auth/local", user)
      const jwt = response.data.jwt
      localStorage.setItem("user_token", jwt)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    
      <div className='modal'>
        <h2>Se Connecter</h2>
        <div className='form'>
          <input type='text' placeholder='Email' className='form-input' onChange={(mail) => {setMail(mail.target.value)}} />
          <input type='password' placeholder='Password' className='form-input' onChange={password => setPassword(password.target.value)} />
          <button className='form-btn' onClick={handleSubmit}>Se Connecter</button>
        </div>
        <span className='footer'>Vous n'etes pas encore inscrit ? 
          <a href='/signin' className='footer-nav'>S'inscrire</a></span>
      </div>
    
  )
}
