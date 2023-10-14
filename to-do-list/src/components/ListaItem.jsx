
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import Footer from "./components/Footer.jsx"; 

import Button from "./components/Button"; 

const ListaItem = ({ tarefa, index, adicionarTarefa, editarTarefa, excluirTarefa }) => {
  return (
    <li key={tarefa.id}>
      <div className="lista-item-titulo">
        {tarefa.titulo}
      </div>
      <div className="lista-item-descricao">
        {tarefa.descricao}
      </div>
      <div className="lista-item-acao">
        <Button
          onClick={() => editarTarefa(index)}
          text="Editar"
        />
        <Button
          onClick={() => excluirTarefa(index)}
          text="Excluir"
        />
      </div>
    </li>
  );
};

export default ListaItem;
