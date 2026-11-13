
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !senha) {
      setErro("Preencha o e-mail e a senha.");
      return;
    }

    const result = login(email, senha);

    if (result.error) {
      setErro(result.error);
      return;
    }

    navigate(location.state?.from?.pathname || "/", { replace: true });
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <img src="https://agenciapnz.com/wp-content/uploads/Logo-Netflix.png" alt="Netflix" />
        <h1>Entrar</h1>
        <p>Entre na sua conta</p>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        {erro && <p className="auth-error" role="alert">{erro}</p>}
        <button type="submit">Entrar</button>

        <p className="auth-switch">
          Novo por aqui? <Link to="/cadastro">Criar uma conta</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;