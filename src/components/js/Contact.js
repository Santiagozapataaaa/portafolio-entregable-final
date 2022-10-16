import styled from 'styled-components'

const Contact = () => {
    return(
        <>
        <Titulo>Contacto</Titulo>
        <div class='container'>
            <form id='contacto' class='row g-3 mt-4 mb-5'>
                <div classname='col-6'>
                    <label class="form-label">Email</label>
                    <input type="Email" class='form-control' placeholder="ingrese su Email de contacto"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div classname='col-6'>
                    <button type="submit" class='btn btn-primary'>validar</button>
                </div>
            </form>
        </div>
        </>
    )
}

const Titulo = styled.h2`
text-align: center;
margin-top: 30px;
`;

export default Contact;