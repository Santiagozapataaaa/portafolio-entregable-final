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
    return(
        <Fragment>
            <Titulo id='habilidades'>
                <Myh3>Ruta de aprendizaje</Myh3>
            </Titulo>
            <Contenedor>
                <Widget>
                    <img src={html} alt='html logo' width={80}/>
                    <p>HTML</p>
                </Widget>
                <Widget>
                    <img src={css} alt='css logo' width={80}/>
                    <p>CSS</p>
                </Widget>
                <Widget>
                    <img src={js} alt='js logo' width={80}/>
                    <p>JAVASCRIPT</p>
                </Widget>
                <Widget>
                    <img src={php} alt='php logo'width={80}/>
                    <p>PHP</p>
                </Widget>
                <Widget>
                    <img src={sql} alt='sql logo' width={80}/>
                    <p>SQL</p>
                </Widget>
                <Widget>
                    <img src={processing} alt='processing logo' width={80}/>
                    <p>PROCESSING</p>
                </Widget>
                <Widget>
                    <img src={cSharp} alt='cSharp logo' width={80}/>
                    <p>C#</p>
                </Widget>
            
            </Contenedor>
            <Titulo></Titulo>
        </Fragment>
    );
}

/*ESTILOS STYLED COMPONENTS*/

const Myh3 = styled.h3`
font-weight: bold;
`;

const Contenedor = styled.div`
background-color: #585858;
color: #000;
display: flex;
flex-direction: row;
padding: 10px;
flex-wrap: wrap;
justify-content: center;
`;

const Titulo = styled.div`
background-color: #222222;
padding: 10px;
text-align: center;
height: 60px;
`;

const Widget = styled.article`
border:5px solid #222222;
padding: 10px;
`;

export default Skills;