export class MenuModel{
    id: number;
    title: string;
    icon: string;
    page: string;
    actions: ActionMenuModel[];
    subMenu: MenuModel[];
}

export class ActionMenuModel {
    idAction: number;
    name: string;

    constructor(params?: Partial<ActionMenuModel>) {
        this.idAction = params?.idAction || 0;
        this.name = params?.name || null;
    }
}