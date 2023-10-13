import React from "react";
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
