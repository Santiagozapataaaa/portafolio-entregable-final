import React, { Fragment } from 'react'
import html from '../../data/html.png'
import css from '../../data/css.png'
import js from '../../data/javascript.png'
import php from '../../data/php.png'
import sql from '../../data/sqlServer.png'
import processing from '../../data/processing.png'
import cSharp from '../../data/cSharp.png'
import styled from 'styled-components'


const Skills = () => {

const Myh3 = styled.h3`
color: black;
`;

    return(
        <Fragment>
            <div>
                <Myh3>Ruta de aprendizaje</Myh3>
            </div>
            <div>
                <article>
                    <img src={html} alt='html logo' width={80}/>
                </article>
                <article>
                    <img src={css} alt='css logo' width={80}/>    
                </article>
                <article>
                    <img src={js} alt='js logo' width={80}/>
                </article>
                <article>
                    <img src={php} alt='php logo'width={80}/>
                </article>
                <article>
                    <img src={sql} alt='sql logo' width={80}/>
                </article>
                <article>
                    <img src={processing} alt='processing logo' width={80}/>
                </article>
                <article>
                    <img src={cSharp} alt='cSharp logo' width={80}/>
                </article>
            </div>
        </Fragment>
    );
}

export default Skills;