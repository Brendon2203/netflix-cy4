
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
        <h1>Bem-vindo</h1>
        <p>Entre na sua conta</p>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite a sua senha"
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