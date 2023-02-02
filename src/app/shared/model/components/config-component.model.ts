export class ConfigComponent{
    title: string;
    description: string;
    columns: string[];
    iconFA: string;
    filterColumns: string[];

    constructor(data?: Partial<ConfigComponent>){
        this.title = data?.title || "";
        this.description = data?.description || "";
        this.iconFA = data?.iconFA || "";
        this.columns = data?.columns || [];
        this.filterColumns = data?.filterColumns || [];
    }
}