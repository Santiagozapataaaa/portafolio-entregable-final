import React, { Fragment } from 'react';
import Styles from './css/Aboutme.module.css'

const AboutMe = () => {
    return( 
    <Fragment>
        <div className={Styles.contenedor}>
            <h1>Santiago Franco Zapata</h1>
            <h2>quien soy?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore accusantium asperiores dolorem qui libero 
            ea reiciendis esse, autem, est maiores sapiente quaerat obcaecati sequi facere deleniti aliquid eos velit!</p>
        </div>
    </Fragment>
    )
}

export default AboutMe;