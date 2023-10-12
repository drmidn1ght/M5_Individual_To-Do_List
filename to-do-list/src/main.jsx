/* Arquivo principal do projeto */ 


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import ListaTarefas from "./components/ListaTarefas";
import ListaItem from "./components/ListaItem";

import Footer from "./components/Footer";
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
