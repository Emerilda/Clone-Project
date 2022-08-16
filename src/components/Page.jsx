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
                        
                        <a href="/#">Tendencias</a>
                        <a href="/#">Barmanes</a>
                        <a href="/#">Cocteles</a>
                        <a href="/#">Ingredientes</a>
                        
                    </div>
                    <div className="footer-column">
                        <h4>Util</h4>
                        <a href="/#">Calculadora de fiestas</a>
                        <a href="/#">Colecciones de cocteles</a>
                        <a href="/#">Estrellas</a>
                        
                    </div>
                    <div className="footer-column">
                        <h4>Inkshaker</h4>
                        
                            <a href="/#">Sobre nosotros</a>
                            <a href="/#">Contactos</a>
                        
                    </div>
                    <div className="languages" >
                        <div className="footer-column">
                        <h4>Cambiar idioma</h4>
                        
                            <a href="/#">English UK</a>
                            <a href="/#">Deutsch</a>
                            <a href="/#">Español</a>
                            <a href="/#">English US</a>
                            </div>

                            <div className='footer-column'>
                            <div className='empty'></div>
                            <a href="/#">Francais</a>
                            <a href="/#">Українська</a>
                            <a href="/#">Русский</a>
                            <a href="/#">Italiano</a>
                            </div>
                            
                        
                    </div>
                  
                    <div className="footer-column">
                        
                        <h4>Siguenos</h4>
                        {/* ACA LE FALTAN LAS REDES SOCIALES LMAOOOOO */}
                    </div>
                    
                </div>

              
                <div className='footer-bottom'><p>©Inkshaker.com 2022</p>
                 <h2>21+</h2></div>
                
            </footer>

        </body>
    );
}

export default Page;