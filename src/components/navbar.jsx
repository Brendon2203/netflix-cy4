import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [perfil, setPerfil] = useState({
    nome: "Carlos",
    imagem:
      "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg",
  });

  const perfis = [
    {
      nome: "Carlos",
      imagem:
        "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg",
    },
    {
      nome: "João",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2D6sCXleGxQ-64l7JUkd_HLC8szG8TjpLh57e4mOSQ&s=10",
    },
  ];

  function selecionarPerfil(novoPerfil) {
    setPerfil(novoPerfil);
    setAberto(false);
  }

  return (
    <div className="container">

      {/* SELETOR DE PERFIL */}
      <div className="perfil-container">

        <button
          className="perfil-button"
          onClick={() => setAberto(!aberto)}
        >
          <img
            className="img-perfil"
            src={perfil.imagem}
            alt={perfil.nome}
          />

          <span className="seta">▼</span>
        </button>

        {aberto && (
          <div className="menu-perfis">

            {perfis.map((item) => (
              <div
                className="perfil-opcao"
                key={item.nome}
                onClick={() => selecionarPerfil(item)}
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                />

                <span>{item.nome}</span>
              </div>
            ))}

          </div>
        )}

      </div>

      {/* BOTÕES DA NAVBAR */}
      <div className="box-btn">
        <button>🔍︎</button>
        <button>Início</button>
        <button>Séries</button>
        <button>Filmes</button>
        <button>Minha Lista</button>
      </div>

      {/* LOGO */}
      <img
        className="img-logo"
        src="https://www.pngarts.com/files/1/Netflix-Logo-PNG-Transparent-Image.png"
        alt="logo"
      />

    </div>
  );
}

export default Navbar;