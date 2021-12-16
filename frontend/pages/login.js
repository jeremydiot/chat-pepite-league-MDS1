export default function Login () {
  return (
    <div class='d-flex flex-column'>
      <h2>Se Connecter</h2>
      <form class='d-flex flex-column'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='password' />
        <button type='submit'>Se Connecter</button>
      </form>
      <span>Vous n'etes pas encore inscrit ? <a href='/subscription'>S'inscrire</a></span>
    </div>
  )
}
