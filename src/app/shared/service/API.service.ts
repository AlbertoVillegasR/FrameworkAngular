import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResponseModel } from "../model/response.model";

@Injectable({
    providedIn: 'root'
})
export class APISERVICE {
    constructor(private http: HttpClient) { }

    public async post<T>(path: string, obj?: any){
        let resul: ResponseModel<T> = new ResponseModel();
        path = `${environment.urlApi}/${path}`
        try {
            let result :any  = await this.http.post(path, obj).toPromise();         
            resul = result;
        } catch (error) {
            resul.status = 0;
            resul.message = "Error en el servicio";
        }
        console.log("retornando service")
        console.log(resul);
        return resul
    }
}