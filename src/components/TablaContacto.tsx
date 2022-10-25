import React from 'react'
import { ContactoUsr } from '../Model/Contacto.model';

type TablaContactoProps = {
  contactos: ContactoUsr[];
}

const TablaContacto = ({contactos = []}: TablaContactoProps) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Numero</th>
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
                <td><button className="btn btn-danger">Eliminar</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TablaContacto;