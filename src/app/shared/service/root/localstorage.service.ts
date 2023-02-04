import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class LocalStorageService {
    setUser(){
        localStorage.setItem("user","administrador")
    }

    getUser(){
        return localStorage.getItem("user");
    }
}