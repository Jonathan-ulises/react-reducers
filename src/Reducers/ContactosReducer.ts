import { ACTION, CRUD_TYPE } from "../Model/Contacto.model";

/*
Refinimos un Reducer de contactos como una arrow function que recibe solo
dos parametros que son: un state y un action
*/
export const ContactosReducer = <T extends {id?: string}> (state: T[], action: ACTION<T>) => {  
  //Toda action tiene un tipo para lo cual agregamos un switch-case para determinar que tipo es.
  switch (action.type) {
    case CRUD_TYPE.ADD:
      return [...state, action.payload]; // Hacemos una copia del state
      /*
      y lo agregamos un action payload (payload contiene la informacion que viene dentro, esto es
        un objeto con los nuevos datos)
      */
     case CRUD_TYPE.DELETE:
      return state.filter(actual => actual.id !== action.payload.id)
    default:
      return state;
  }
}