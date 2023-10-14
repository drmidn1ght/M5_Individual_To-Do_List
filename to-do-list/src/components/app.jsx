/* Arquivo principal do projeto */ 


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import ListaItem from "./components/ListaItem.jsx";

import Footer from "./components/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ListaTarefas />
          <ListaItem />
              <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));