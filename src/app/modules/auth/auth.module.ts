import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LocalStorageService } from 'src/app/shared/service/root/localstorage.service';
import { ToolService } from 'src/app/shared/core/services/core.service';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers:[
    LocalStorageService,
  ]
})
export class AuthModule { }
