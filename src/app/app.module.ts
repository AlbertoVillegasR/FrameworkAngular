import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntranetModule } from './modules/intranet/intranet.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SplashScreenModule } from './shared/components/base/splash-screen/splash-screen.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SplashScreenModule
        // IntranetModule
        // SharedModule
    ]
})
export class AppModule { }
