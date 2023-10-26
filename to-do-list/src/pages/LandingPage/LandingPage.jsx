import React from "react";
import Header from "./components/Header.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import Footer from "./components/Footer.jsx"; 


const LandingPage = () => {
  return (
    <div>
    <Header/>
    <ListaTarefas/>
  
    <Footer/>
    </div>
  )
}

export default LandingPage