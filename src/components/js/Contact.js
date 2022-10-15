import React, { Fragment } from 'react'

const Contact = () => {
    return(
        <Fragment>
            <form id='contacto'>
                <input                     
                    type="text"
                    placeholder="ingrese el nombre"
                ></input>
                <button
                    type='submit'
                >Enviar</button>
            </form>
        </Fragment>
    )
}

export default Contact;