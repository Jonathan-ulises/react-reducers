export const KEY_STORATE = 'contactos';

export interface ContactoUsr {
    id?: string,
    nombre?: string,
    telefono?: string,
    sexo?: string,
    fechaNacimiento?: string,
    edad?: number
    imagen?: string,
}

export type ACCION_CONTACTO = {
    type: string,
    payload: ContactoUsr;
}


export enum CRUD_TYPE {
    ADD = "add",
    DELETE = "delete"
}

/**
 * Interface de acccion generica
 */
export type ACTION<T> = {
    type: string,
    payload: T
}