import React, { useState } from "react";
import ListaItem from "./components/ListaItem";

class ListaTarefas extends Component {
  state = {
    tarefas: [],
  };

  render() {
    return (
      <div>
        <h1>Lista de tarefas</h1>
        <ul>
          {this.state.tarefas.map((tarefa, index) => (
            <ListaItem key={index} tarefa={tarefa} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaTarefas;
