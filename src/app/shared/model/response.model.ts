export class ResponseModel <T>{
    status: number;
    message: string;
    data: T;

    constructor(status?: number, message?: string, data?: T){
        console.log(message);
        
        this.status = status || 1;
        this.message = message || "";
        this.data = data || null;
    }
}