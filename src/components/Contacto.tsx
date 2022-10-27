import React, { useReducer } from 'react'
import { ContactoUsr } from '../Model/Contacto.model'
import FormularioAdd from './FormularioAdd'
import TablaContacto from './TablaContacto'
import { ContactosReducer } from '../Reducers/ContactosReducer';

const contactos: ContactoUsr[] = [
  {
    id: "C1",
    nombre: 'Raul',
    telefono: '47712345678'
  },
  {
    id: "C2",
    nombre: 'Araceli',
    telefono: '47798765432'
  }
]

const Contacto = () => {

  // Creamos el reducer pasandole el Reducer y un estado inicial.
  // const reducer = useReducer(ContactosReducer, contactos);
  // console.log({reducer})
  const [state, dispatch] = useReducer(ContactosReducer<ContactoUsr>, contactos);

  return (
    <div className='container mt-3'>
      <FormularioAdd dispatch={dispatch}/>
      <TablaContacto contactos={state as ContactoUsr[]}/>
    </div>
  )
}

export default Contacto