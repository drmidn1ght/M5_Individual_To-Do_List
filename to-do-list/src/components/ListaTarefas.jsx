import React, { useState } from "react";
import ListaItem from "./components/ListaItem";
import GlobalStyle from "./style/GlobalStyle";

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const editarTarefa = (index, tarefa) => {
    setTarefas((tarefas) => {
      tarefas[index] = tarefa;
      return tarefas;
    });
  };

  const excluirTarefa = (index) => {
    setTarefas((tarefas) => {
      tarefas.splice(index, 1);
      return tarefas;
    });
  };

  return (
    <div className="lista-tarefas">
      <h2
        aria-label="Confira sua lista:"
        aria-hidden="false"
        role="heading"
      >
        Lista de tarefas
      </h2>

      <ul>
        {tarefas.map((tarefa, index) => (
          <ListaItem
            key={tarefa.id}
            tarefa={tarefa}
            index={index}
            adicionarTarefa={adicionarTarefa}
            editarTarefa={editarTarefa}
            excluirTarefa={excluirTarefa}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
