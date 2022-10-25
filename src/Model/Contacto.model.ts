export interface ContactoUsr {
    id?: string,
    nombre: string,
    telefono: string
}

export type ACCION_CONTACTO = {
    type: string,
    payload: ContactoUsr;
}

/**
 * Interface de acccion generica
 */
export type ACTION<T> = {
    type: string,
    payload: T
}