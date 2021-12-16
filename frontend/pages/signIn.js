
import axios from "axios";
import { useState } from "react";

export default function SignIn() {

  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const user = {
      lastname: "Gonzalez",
      firstname: "Nathan",
      email: "nathan@gonzalez.es",
      password: "test1234",
      username: "znatan"
    }

    try {
      const response = await axios.post("http://localhost:1337/auth/local/register", user)
      console.log(response.data)


    } catch (error) {
      
    }

  }

  return (
    <div>
      <div className="container">
        <h2>S'inscrire</h2>
        <input type="text" placeholder="LastName" onChange={lastname => setLastname(lastname.target.value)}/>
        <input type="text" placeholder="FirstName" onChange={firstname => setFirstname(firstname.target.value)}/>
        <input type="Email" placeholder="Email" onChange={mail => setMail(mail.target.value)}/>
        <input type="password" placeholder="password" onChange={password => setPassword(password.target.value)}/>
        <button className="btn-form" onClick={handleSubmit}>
          S'inscrire
        </button>
      <span className="logout-btn">Vous n'etes pas encore connecté ? <a href='/login'>Se connecter</a></span>
      </div>
    </div>
  );
}
