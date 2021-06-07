import React from 'react';

import './styles.css';
/* <img src={src} className="img"></img> const src = '/src/assets/img/amongus1.jpg';
<img src={src} className="container-gif"></img>
*/
const src = 'https://pa1.narvii.com/6829/7187dbc8d7d4d4bcc2ba5316a746280fc065c458_hq.gif'


export default function DiscordFront() {
    return (
        <div className="jumbotron">
            <h1 className="title">
                Únete a nuestro Discord y comienza a formar parte de nuestra comunidad.
            </h1>
           <span>
                Descubre nuestros salas de diversos juegos, programación, lectura y más.     
            </span> 
           <a class="btn" href="#" role="button">Unirse »</a>
           
            <ul>

            </ul>
        </div>
    )
}