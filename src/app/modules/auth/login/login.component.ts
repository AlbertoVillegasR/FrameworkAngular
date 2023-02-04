import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentWithFormComponent } from 'src/app/shared/components/content-with-form/content-with-form.component';
import { ToolService } from 'src/app/shared/core/services/core.service';
import { STATUS } from 'src/app/shared/model/constants.model';
import { LocalStorageService } from 'src/app/shared/service/root/localstorage.service';
import { SplashScreenService } from 'src/app/shared/service/root/splash-screen.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  @ViewChild(ContentWithFormComponent, { static: true }) content: ContentWithFormComponent;

  constructor(private splash: SplashScreenService,
    private ls: LocalStorageService,
    private router: Router,
    private toolService: ToolService,
    private authService: AuthService
  ) {
    if(authService.user){
      this.router.navigate(['/table1']);
    }
   }

  ngOnInit(): void {
    
  }

  verifyUser() {
    if (!this.content.isValidateForm()){
      this.toolService.sweetAlert.show(STATUS.Error, "Usuario y/o Contraseña no son validos!");
      return;
    }
    if (this.user === "admin" && this.password === "admin") {
      this.ls.setUser();
      this.router.navigate(["/home"])
    }
  }

}
