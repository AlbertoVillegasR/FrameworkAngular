export enum STATUS {
    Success = 1,
    Error = -1,
    Warning = -2,
    Forbidden = -3,
    Unauthorized = -4,
    UnprocessableModel = -5,
}

export enum STATUS_MESSAGES {
    Success = 'La operación se ejecutó correctamente',
    Error = 'Ocurrió un error',
    Warning = '',
    Forbidden = 'Forbidden',
    Unauthorized = 'Unauthorized',
    UnprocessableModel = 'Unprocessable',
}


//DOCUMENT TYPES
export enum DOCUMENT_TYPE {
    RUC = 8,
    DNI = 9,
    CARNET = 10,
    PASAPORTE = 11,
    CDI = 12

}

export enum MODENAS_TYPE {
    SOL = 1,
    DOLAR = 2
}


