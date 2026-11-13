import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./register.css";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [erro, setErro] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !senha || !confirmacao) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmacao) {
      setErro("As senhas não são iguais.");
      return;
    }

    const result = register({ name: nome, email, password: senha });

    if (result.error) {
      setErro(result.error);
      return;
    }

    navigate("/", { replace: true });
  }

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleRegister}>
        <img
          src="https://agenciapnz.com/wp-content/uploads/Logo-Netflix.png"
          alt="Netflix"
        />
        <h1>Criar conta</h1>
        <p>Cadastre-se para continuar</p>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <label htmlFor="cadastro-email">E-mail</label>
        <input
          id="cadastro-email"
          type="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="cadastro-senha">Senha</label>
        <input
          id="cadastro-senha"
          type="password"
          autoComplete="new-password"
          placeholder="Pelo menos 6 caracteres"
          minLength={6}
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        <label htmlFor="confirmacao-senha">Confirmar senha</label>
        <input
          id="confirmacao-senha"
          type="password"
          autoComplete="new-password"
          placeholder="Digite a senha novamente"
          minLength={6}
          value={confirmacao}
          onChange={(event) => setConfirmacao(event.target.value)}
          required
        />

        {erro && <p className="auth-error" role="alert">{erro}</p>}
        <button type="submit">Criar conta</button>

        <p className="auth-switch">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;