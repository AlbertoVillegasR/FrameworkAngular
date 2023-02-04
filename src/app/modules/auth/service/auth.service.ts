import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/shared/service/root/localstorage.service";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private _user: any;
    constructor(
        private ls: LocalStorageService
    ) { }

    async getAuthenticatedUser(): Promise<boolean> {
        // Verificar nuevamente al usuario por api.
        let user = this.ls.getUser();
        if (user) {
            this._user = user;
            return true;
        }
        return false;
    }

    get user(): any {
		return this._user;
	}
}