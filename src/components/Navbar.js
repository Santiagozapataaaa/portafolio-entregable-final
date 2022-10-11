import React, { Fragment } from 'react'
import fenrir from '../data/fenrir.png'
import Styles from './css/Navbar.module.css'

const Navbar = () => {
    return(
    <Fragment>
        <div className={Styles.contenedor}>
            <nav className={Styles.menu}>
                <div className={Styles.logo}>
                    <img src={fenrir} alt='logotipo fenrir'/>
                </div>
                <div className={Styles.contenido}>
                    <a href='./Aboutme.js'>Sobre mi</a>
                    <a href='./Skills.js'>Habilidades</a>
                    <a href='./Projects.js'>Proyectos</a>
                    <a href='./Contact.js'>Contacto</a>
                </div>
            </nav>
        </div>
    </Fragment>
    );
}

export default Navbar;