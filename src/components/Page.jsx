/* CLUSTER H: navbAR, main, footer */
import React from 'react';
import '../styles/Page.css'
import Logo from '../assets/logo.svg';
import { GoSearch } from 'react-icons/go';


function Page(){
    return(
        <body className='page'>
            <header>
                {/* logo */}
                <div className='logo'><img height="26px" src={Logo} alt="Logo de Inshaker"/></div>
                {/* navbar */}
                
                <div className="navbar">
                    <a className='navitem active' href="_blank"> Tendencias </a>
                    <a className='navitem' href="_blank"> Bármanes </a>
                    <a className='navitem' href="_blank"> Cócteles </a>
                    <a className='navitem' href="_blank"> Ingredientes </a>
                     {/* search */}
                    <a href="_blank" style={{color: "white", fontSize:'20px'}} ><GoSearch/></a>
                </div>
               
                {/* iniciar sesion */}
                <div className='login_box'>
                    <a href="_blank">Iniciar sesión</a>
                </div>
            </header>


            <main>
                <div className='searchsection'>SEARCH</div>
                <article>
                    <p>TREND BADGE TEMPLATE</p>
                </article>

            </main>

            
            <footer>
                <div className='footer-container'>
                   
                    <div className="footer-column">
                        <h4>Principal</h4>
                        <ul>
                            <li><a href="/#">Tendencias</a></li>
                            <li><a href="/#">Barmanes</a></li>
                            <li><a href="/#">Cocteles</a></li>
                            <li><a href="/#">Ingredientes</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Util</h4>
                        <ul>
                            <li><a href="/#">Calculadora de fiestas</a></li>
                            <li><a href="/#">Colecciones de cocteles</a></li>
                            <li><a href="/#">Estrellas</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Inkshaker</h4>
                        <ul>
                            <li><a href="/#">Sobre nosotros</a></li>
                            <li><a href="/#">Contactos</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Cambiar idioma</h4>
                        <ul>
                            <li><a href="/#">English UK</a></li>
                            <li><a href="/#">Deutsch</a></li>
                            <li><a href="/#">Español</a></li>
                            <li><a href="/#">English US</a></li>
                            <li><a href="/#">Francais</a></li>
                            <li><a href="/#">Українська</a></li>
                            <li><a href="/#">Русский</a></li>
                            <li><a href="/#">Italiano</a></li>
                        </ul>
                    </div>
                  
                    <div className="footer-column">
                        
                        <h4>Siguenos</h4>
                        {/* ACA LE FALTAN LAS REDES SOCIALES LMAOOOOO */}
                    </div>
                    
                </div>
                {/* barrita mistica */} <hr/>
                <div className='footer-container'><p>Inkshaker.com 2022</p>
                <span></span> <h1>21+</h1></div>
                {/* inkashaker.com 2022 */}
            </footer>
        </body>
    );
}

export default Page;