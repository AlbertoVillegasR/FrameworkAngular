export class PersonaModel {
    nombres: string;
    apellidos: string;
    dni: number;
    constructor(data: Partial<PersonaModel>) {
        this.nombres = data?.nombres || null;
        this.apellidos = data?.apellidos || null;
        this.dni = data?.dni || null;
    }
}