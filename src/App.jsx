import { useState } from 'react'
import heroImg from './assets/background-hero.png'
import logoSenai from './assets/logo-senai.png'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <header>
      <img src={logoSenai} />
      <div className="logoSenai"></div>
      <div className="heroImg"></div>
      <div className="borda">
        <div className="topo-links">
          <span>FIESC</span>
          <span>CIESC</span>
          <span>SESI</span>
          <span>SENAI</span>
          <span>IEL</span>
        </div>
      </div>
      {/*  */}
      <nav className="menu">
        <span>Institucional</span>
        <span>Para você</span>
        <span>Para empresas</span>
        <span>Já sou aluno</span>
        <span>Transparência</span>
      </nav>
      {/*  */}

      <img src={heroImg} />

      {/*  */}
      <div classNome="quadrado-container1"></div>
      <h3>Para você</h3>
      <p>Cursos para sua carreira.</p>
      {/*  */}
      <div classNome="quadrado-container2"></div>
      <h3>Para empresas</h3>
      <p>Capacitações personalizadas e outras </p>
      <p>soluções inovadoras para impulsionar</p>
      <p> a competitividade do seu negócio.</p>
    </header>
  )
}

export default App
