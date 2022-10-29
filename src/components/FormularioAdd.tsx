import React, { useState } from 'react'
import { ACTION, ContactoUsr, CRUD_TYPE } from '../Model/Contacto.model';
import { v4 as uuid } from 'uuid';

type PropForm = {
  dispatch: React.Dispatch<ACTION<ContactoUsr>>
}

const FormularioAdd = ({ dispatch }: PropForm) => {

  //Agregamos un useState
  const [data, setdata] = useState<ContactoUsr>({ nombre: "", telefono: "", imagen: "", sexo: "" , fechaNacimiento: ""});

  // Desestructurando el state
  const { nombre, telefono, sexo, fechaNacimiento, imagen } = data;

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
      telefono,
      sexo,
      fechaNacimiento,
      imagen,
      edad: 0
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
          Sexo: {" "}
          <div className="form-check">
            <input 
              onChange={e => handleChange(e)} 
              className="form-check-input" 
              type="radio" 
              name="sexo" 
              value="Masculino" 
              defaultChecked
              id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Masculino
              </label>
          </div>
          <div className="form-check">
            <input 
              onChange={e => handleChange(e)} 
              className="form-check-input" 
              type="radio" 
              name="sexo" 
              value="Femenino" 
              id="flexRadioDefault2" 
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Femenino
              </label>
          </div>
        </label>

        <label htmlFor="" className='mx-1 d-grid gap-2'>
          Fecha Nacimiento: {" "}
          <input
            onChange={e => handleChange(e)}
            name="fechaNacimiento"
            value={fechaNacimiento}
            type="date"
            className='form-control' />
        </label>

        <label htmlFor="" className='mx-1 d-grid gap-2'>
          Imagen: {" "}
          <input
            onChange={e => handleChange(e)}
            name="imagen"
            value={imagen}
            type="text"
            className='form-control' />
        </label>

        <label htmlFor="" className='mx-1 d-grid gap-2'>
          <button onClick={handleAdd} className='btn btn-success mt-2' >Agregar</button>
        </label>
      </div>
    </>
  )
}

export default FormularioAdd;