import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p
        aria-label="Rodapé da página"
        aria-hidden="false"
        role="contentinfo"
      >
        Ana Oliveira - 2023
      </p>
    </footer>
  );
};


/* Rodapé otimizado para leitores de tela. 
    - area-label: cria um texto alternativo;
        - area-hidden: Oculta algum componente de leitores de tela, por exemplo, efeitos visuais. Neste caso, está definido como false;
            - role: Define o papel do componente. */