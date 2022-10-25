import { ContactoUsr, ACCION_CONTACTO } from "../Model/Contacto.model";

/*
Refinimos un Reducer de contactos como una arrow function que recibe solo
dos parametros que son: un state y un action
*/
export const ContactosReducer = <T>(state: T[], action: ACCION_CONTACTO) => {  
  //Toda action tiene un tipo para lo cual agregamos un switch-case para determinar que tipo es.
  switch (action.type) {
    case 'add':
      return [...state, action.payload]; // Hacemos una copia del state
      /*
      y lo agregamos un action payload (payload contiene la informacion que viene dentro, esto es
        un objeto con los nuevos datos)
      */
    default:
      return state;
  }
}