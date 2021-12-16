
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
      <div style={{ height: 'fit-content', width: 'fit-content', margin: 'auto', padding: '3rem', backgroundColor: 'white', marginTop: '6rem', borderRadius: '0.5rem', border: 'solid 0.1rem' }}>
        <h2>Se Connecter</h2>
        <form class='form'>
          <input type='text' placeholder='Email' class='form-input' onChange={mail => setMail(mail)} />
          <input type='password' placeholder='Password' class='form-input' onChange={password => setPassword(password)} />
          <button type='submit' class='form-btn' onClick={handleSubmit}>Se Connecter</button>
        </form>
        <span class='footer'>Vous n'êtes pas encore inscrit ? <a href='/signin' class='footer-nav'>S'inscrire</a></span>
      </div>

    </div>


  )
}
