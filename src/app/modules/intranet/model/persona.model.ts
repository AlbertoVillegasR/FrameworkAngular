export class PersonaModel {
    name: string;
    first_lastname: string;
    second_lastname: string;
    brithdate: string;
    nro_doc: string;
    constructor(data?: Partial<PersonaModel>) {
        this.name = data?.name || null;
        this.first_lastname = data?.first_lastname || null;
        this.second_lastname = data?.second_lastname || null;
        this.brithdate = data?.brithdate || null;
        this.nro_doc = data?.nro_doc || null;
    }
}