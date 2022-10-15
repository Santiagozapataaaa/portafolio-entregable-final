import React, { Fragment } from 'react'
import html from '../../data/html.png'
import css from '../../data/css.png'
import js from '../../data/javascript.png'
import php from '../../data/php.png'
import sql from '../../data/sqlServer.png'
import processing from '../../data/processing.png'
import cSharp from '../../data/cSharp.png'
import styledImg from '../../data/styled.png'
import reactImg from '../../data/React.png'
import styled from 'styled-components'

const Skills = () => {
    return(
        <Fragment>
            <Titulo id='habilidades'>
                <Myh2>Ruta de aprendizaje</Myh2>
            </Titulo>
            <Contenedor>
                <Widget>
                    <Imagenes src={html} alt='html logo'/>
                </Widget>
                <Widget>
                    <ImgCss src={css} alt='css logo'/>
                </Widget>
                <Widget>
                    <ImgJs src={js} alt='js logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={php} alt='php logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={sql} alt='sql logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={processing} alt='processing logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={cSharp} alt='cSharp logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={reactImg} alt='cSharp logo'/>
                </Widget>
                <Widget>
                    <Imagenes src={styledImg} alt='cSharp logo'/>
                </Widget>
            </Contenedor>
            <Titulo></Titulo>
        </Fragment>
    );
}

/*ESTILOS STYLED COMPONENTS*/

const Myh2 = styled.h2`
font-weight: bold;
`;

const Contenedor = styled.div`
background-color: #585858;
color: #000;
display: flex;
flex-direction: row;
padding: 15px;
flex-wrap: wrap;
justify-content: center;
`;

const Titulo = styled.div`
background-color: #222222;
padding: 0px;
text-align: center;
height: 60px;
`;

const Widget = styled.article`
padding: 20px;
`;

const Imagenes = styled.img`
height: 150px;
width: 170px;
`;

const ImgCss = styled.img`
height: 150px;
width: 135px;
`;

const ImgJs = styled.img`
height: 150px;
width: 245px;
`;

export default Skills;