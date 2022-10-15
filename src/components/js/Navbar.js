import fenrir from '../../data/fenrir.png'
import Styles from '../css/Navbar.module.css'

const Navbar = () => {
    return(
        <div className={Styles.contenedor}>
            <nav className={Styles.menu}>
                <div className={Styles.logo}>
                    <img src={fenrir} alt='logotipo fenrir'/>
                </div>
                <div className={Styles.contenido}>
                    <a href='#sobremi'>Sobre mi</a>
                    <a href='#habilidades'>Habilidades</a>
                    <a href='#proyectos'>Proyectos</a>
                    <a href='#contacto'>Contacto</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;