import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from './shared/components/base/splash-screen/splash-screen.module';
import { AuthService } from './modules/auth/service/auth.service';
import { Router } from '@angular/router';
import sweetalert from "sweetalert2";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

function appInitializer(authService: AuthService, router: Router) {
    return async () => {
        let userLoaded = await authService.getAuthenticatedUser();
        console.log(userLoaded);
        
        if (!userLoaded) {
            sweetalert.fire({
                title: "¡Error! :(",
                html: "Sesión Terminada",
                icon: "error",
                confirmButtonText: 'Ok'
            });
            router.navigate(['/auth/login']);
        }

    };
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SplashScreenModule,
        NgbModule
    ],
    exports: [
        SplashScreenModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService, Router],
        },
    ],
})
export class AppModule { }
