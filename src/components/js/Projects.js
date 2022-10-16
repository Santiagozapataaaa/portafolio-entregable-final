import styled from 'styled-components'
import ProjectsImg from '../../data/blackmustang.jpg'

const Projects = () => {
    return(
        <MiSeccion id='proyectos'>
            <Titulo>Proyectos</Titulo>
            <Proyecto1>
                <img src={ProjectsImg} alt='proyecto1'></img>
            </Proyecto1>
            <Proyecto2>
                <img src={ProjectsImg} alt='proyecto1'></img>
            </Proyecto2>
            <Proyecto1>               
                <img src={ProjectsImg} alt='proyecto1'></img>
            </Proyecto1>
            <Proyecto2>
                <img src={ProjectsImg} alt='proyecto1'></img>
            </Proyecto2>
        </MiSeccion>
    )
}

const MiSeccion = styled.section`
`;

const Titulo = styled.h2`
    background-color: rgba(0,0,0,.5);
    border-radius: 10px;
    height:100px;
    align-items: center;
    justify-content: center;
    margin: 0px 20px 15px 20px;
    display: flex;
    flex-direction: row;
`;

const Proyecto1 = styled.div`
    background-color: rgba(0,0,0,.5);
    border-radius: 10px;
    padding: 20px;
    height:350px;
    width: auto;
    margin: 0px 20px 15px 20px;
    display: flex;
    flex-direction: row;
`;    

const Proyecto2 = styled.div`
    padding:20px;
    height:350px;
    border-radius: 10px;
    width: auto;
    margin: 0px 20px 15px 20px;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction:row-reverse;
`;

export default Projects;