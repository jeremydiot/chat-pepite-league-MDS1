export default function SignIn () {
  return (
    <div class='d-flex flex-column'>
      <h2>S'inscrire</h2>
      <form class='d-flex flex-column'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='password' />
        <button type='submit'>S'inscrire'</button>
      </form>
    </div>
  )
}
