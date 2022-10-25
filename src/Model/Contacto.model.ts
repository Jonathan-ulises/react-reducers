export interface ContactoUsr {
    id?: string,
    nombre: string,
    telefono: string
}

export type ACCION_CONTACTO = {
    type: string,
    payload: ContactoUsr;
}