import React from 'react'

import './Header.css'

export default function Header () {
  return (
    <header class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <a href="#"><img src="https://th.bing.com/th/id/OIP.z_6BsvRuC-FEJcVtPsqoKgHaHa?w=185&h=185&c=7&o=5&pid=1.7"/></a>
        </div>
        <nav>
          <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
          <ul class="nav-list">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Web Development</a>
              <ul class="nav-dropdown">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Proyectos</a>
              <ul class="nav-dropdown">
                <li>
                  <a href="#">ASS-Bot</a>
                </li>
                <li>
                  <a href="#">ASSC's Website</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Discord</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}