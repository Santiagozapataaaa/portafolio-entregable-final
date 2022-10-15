import Styles from '../css/Aboutme.module.css'
import fenrir from '../../data/fenrir.png'

const AboutMe = () => {
    return( 
        <main id='sobremi'>
            <div className={Styles.contenedor}>
                <div className={Styles.imagen}>
                    <img src={fenrir} alt='imagen fenrir'></img>
                </div>
                <div>
                    <h1>PORTAFOLIO</h1>
                    <p>Estudiante de desarrollo de software, apasionado por el aprendizaje y la innovación. Como profesional siempre 
                    estoy a la vanguardia de las tendencias en mi campo, actualmente me encuentro en la búsqueda de un empleo en el
                    que pueda crecer a futuro tanto a nivel personal como profesional aprendiendo nuevas tecnologias.</p>
                </div>
            </div>
        </main> 
    )
}

export default AboutMe;