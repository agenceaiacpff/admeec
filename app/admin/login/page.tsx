export default function LoginPage({ searchParams }: { searchParams?: Promise<{ error?: string }> }) {
  return (
    <main className="section">
      <div className="container">
        <div className="article">
          <p className="badge">Administration ADMEEC</p>
          <h1>Connexion administrateur</h1>
          <p>Entrez le mot de passe défini dans la variable Vercel <strong>ADMIN_PASSCODE</strong>.</p>
          <form className="form" action="/api/admin/login" method="post">
            <input className="input" type="password" name="passcode" placeholder="Mot de passe administrateur" required />
            <button className="btn" type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </main>
  );
}
