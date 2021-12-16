export default function Login () {
  return (
      <div class='modal'>
        <h2>Se Connecter</h2>
        <form class='form'>
          <input type='text' placeholder='Email' class='form-input' />
          <input type='password' placeholder='Password' class='form-input' />
          <button type='submit' class='form-btn'>Se Connecter</button>
        </form>
        <span class='footer'>Vous n'etes pas encore inscrit ? <a href='/signin' class='footer-nav'>S'inscrire</a></span>
      </div>
  )
}
