import React from 'react'
import Logo from './logo.png'
import './teste.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Teste = () => {
  return (
    <header>
      <div className="container-header">
      <img src={Logo} alt="" />
        <div className="header-sociais">
          <a href="" color="#343746"><FaLinkedin /> </a>
          <a href="#"><FaFacebookSquare /> </a>
          <a href="#"><FaInstagram /> </a>
        </div>
        
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Inicio </a>
          </li>
          <li>
            <a href="prestacaocontas.html">Prestação de contas</a>
          </li>
          <li>
            <a href="">Noticias</a>
          </li>
          <li>
            <a href="">Equipes</a>
          </li>
          <li>
            <a href="">Calendario</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Teste