import React, { useEffect, useReducer, useState } from 'react'
import { ContactoUsr, KEY_STORATE } from '../Model/Contacto.model'
import FormularioAdd from './FormularioAdd'
import TablaContacto from './TablaContacto'
import { ContactosReducer } from '../Reducers/ContactosReducer';

// const contactos: ContactoUsr[] = [
//   {
//     id: "C1",
//     nombre: 'Raul',
//     telefono: '47712345678'
//   },
//   {
//     id: "C2",
//     nombre: 'Araceli',
//     telefono: '47798765432'
//   }
// ]

// Definimos la funcion init, para recuperar el localStorage
const init = () => {
  // Obtenemos el localstorage
  const contactos = localStorage.getItem(KEY_STORATE);
  return contactos ? (JSON.parse(contactos) as ContactoUsr[]) : [];
}

const Contacto = () => {

  // Creamos el reducer pasandole el Reducer y un estado inicial.
  // const reducer = useReducer(ContactosReducer, contactos);
  // console.log({reducer})
  const [state, dispatch] = useReducer(ContactosReducer<ContactoUsr>, [], init);

  //Agregamos un state para determinar si el formulario es visible
  const [formView, setFormView] = useState(false)

  //Agregamos un useeffect.
  useEffect(() => {
    // Creamos el localStorage
    localStorage.setItem(KEY_STORATE, JSON.stringify(state))
  }, [state])

  return (
    <div className='container mt-3'>
      <div className="d-grid">
        <button
          onClick={() => setFormView(!formView)}
          className="btn btn-warning mb-2">{formView ?  'Cerrar Formulario' : 'Agregar Contacto'}</button>
      </div>

      {formView && <FormularioAdd dispatch={dispatch} />}
      <TablaContacto contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contacto