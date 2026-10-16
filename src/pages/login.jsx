
import { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha o e-mail e a senha!");
      return;
    }

    alert(`Login enviado para ${email}`);
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <img src="https://agenciapnz.com/wp-content/uploads/Logo-Netflix.png" alt="logo" />
        <h1>Bem-vindo</h1>
        <p>Entre na sua conta</p>

        
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        
        <input
          id="senha"
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        <a href="#cadastro">Criar uma conta</a>
      </form>
    </div>
  );
}

export default Login;