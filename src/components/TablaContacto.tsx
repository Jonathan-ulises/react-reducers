import React from 'react'
import { ACTION, ContactoUsr, CRUD_TYPE } from '../Model/Contacto.model';

type TablaContactoProps = {
  contactos: ContactoUsr[];
  dispatch: React.Dispatch<ACTION<ContactoUsr>>
}

const TablaContacto = ({contactos = [], dispatch}: TablaContactoProps) => {

  // Definimos un metodo para controlar el evento del boton eliminar
  const handlerDelete = (id: string) => {

    const deleteAction: ACTION<ContactoUsr> = {
      type: CRUD_TYPE.DELETE,
      payload: {
        id: id
      }
    };

    dispatch(deleteAction);
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Numero</th>
          <th>Sexo</th>
          <th>Fecha Nacimiento</th>
          <th>Edad</th>
          <th>Avatar</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          contactos.map((contacto) => {

            const finalId = contacto.id?.split('-')[0];

            return (
              <tr key={contacto.id}>
                <th>{finalId}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.sexo}</td>
                <td>{contacto.fechaNacimiento}</td>
                <td>{contacto.edad}</td>
                <td><img src={contacto.imagen} alt="avatar" style={{width: '100px'}} /></td>
                <td><button className="btn btn-danger" onClick={ev => handlerDelete(contacto.id!)}>Eliminar</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TablaContacto;