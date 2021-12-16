
  export default function SignIn() {
  return (
    <div style={{height:"100%",width:"100%",justifyContent:"center", alignItems:"center"}}>
      <div>
        <form class="container">
          <h2>S'inscrire</h2>
          <input type="text" placeholder="LastName" />
          <input type="text" placeholder="FirstName" />
          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button type="submit" class="btn-form">
            S'inscrire
          </button>
        <span class="logout-btn">Vous n'etes pas encore connecté ? <a href='/login'>Se connecter</a></span>
        </form>
      </div>
    </div>
  );
}
