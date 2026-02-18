export function LoginPage() {
  return (
    <> 
      <section className="login-section" aria-label="Login form">
        <h2 className="login-title">Sign in</h2>
        <p className="login-subtitle">Use your admin credentials to continue.</p>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="admin@company.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Enter your password" />

          <button type="submit">Sign in</button>
        </form>
      </section>

    </>
  );
}
