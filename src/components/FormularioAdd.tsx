import React, {useState} from 'react'
import { ACCION_CONTACTO, ACTION, ContactoUsr, CRUD_TYPE } from '../Model/Contacto.model';
import { v4 as uuid} from 'uuid';

type PropForm = {
  dispatch: React.Dispatch<ACTION<ContactoUsr>>
}

const FormularioAdd = ({ dispatch }: PropForm) => {

  //Agregamos un useState
  const [data, setdata] = useState<ContactoUsr>({nombre: "", telefono: ""});

  // Desestructurando el state
  const {nombre, telefono} = data;

  // Metodo handleChange para los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  //Deefiniendo el Action para el dispatch
  const actionAdd: ACTION<ContactoUsr> = {
    type: CRUD_TYPE.ADD,
    payload: {
      id: uuid(),
      nombre,
      telefono
    }
  }

  //Metodo para manejar el evento del boton agregar
  const handleAdd = () => {
    dispatch(actionAdd)
  }

  return (
    <>
      <div className='container'>
        <label htmlFor="" className='mx-1 d-grid gap-2'>
          Nombre: {" "}
          <input 
            onChange={e => handleChange(e)} 
            name="nombre" 
            value={nombre} 
            type="text" 
            className='form-control' />
        </label>

        <label htmlFor="" className='mx-1 d-grid gap-2'>
          Numero: {" "}
          <input 
            onChange={e => handleChange(e)} 
            name="telefono" 
            value={telefono} 
            type="text" 
            className='form-control' />
        </label>

        <label htmlFor="" className='mx-1 d-grid gap-2'>
          <button onClick={handleAdd} className='btn btn-info mt-2' >Agregar</button>
        </label>
      </div>
    </>
  )
}

export default FormularioAdd;