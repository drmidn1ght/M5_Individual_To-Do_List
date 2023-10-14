import React from "react";

export const Header = () => {
  return (
    <header>
      <h1
        aria-label="Lista de Tarefas"
        aria-hidden="false"
        role="heading"
      >
        Lista de tarefas
      </h1>
    </header>
  );
};

/* Cabeçalho otimizado para leitores de tela. 
    - aria-label: cria um texto alternativo;
        - aria-hidden: Oculta algum componente de leitores de tela, por exemplo, efeitos visuais. Neste caso, está definido como false;
            - role: Define o papel do componente. */