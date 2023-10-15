
import React from "react";

import Header from "./components/Header.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import ListaItem from "./components/ListaItem.jsx";
import Footer from "./components/Footer.jsx"; 


const LandingPage = () => {
  return (
    <div>
    <Header/>
    <ListaTarefas/>
    <ListaItem/>
    <Footer/>
    </div>
  )
}

export default LandingPage