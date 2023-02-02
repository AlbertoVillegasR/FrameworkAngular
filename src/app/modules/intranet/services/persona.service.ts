import { Injectable } from '@angular/core';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { HttpClient } from '@angular/common/http'
import { APISERVICE } from 'src/app/shared/service/API.service';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http: HttpClient,private api: APISERVICE) { }

  async lista(): Promise<ResponseModel<any>> {
    return this.api.post<any>("common/clientes/listarPersonas");
  }

  async lista2(){
    this.http.post("http://localhost:3100/common/clientes/listarPersonas",null).subscribe(()=>{
    });
  }

}
