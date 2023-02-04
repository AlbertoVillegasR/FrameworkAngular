import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentWithFormComponent } from 'src/app/shared/components/content-with-form/content-with-form.component';
import { SplashScreenService } from 'src/app/shared/service/root/splash-screen.service';
import { PersonaModel } from '../../model/persona.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  person: PersonaModel = new PersonaModel();

  @ViewChild(ContentWithFormComponent, { static: true }) contentForm: ContentWithFormComponent;

  constructor(private splash: SplashScreenService) { }

  ngOnInit(): void {
    this.splash.hide();
  }

  end() {
    let result = this.contentForm.isValidateForm();
  }

}
