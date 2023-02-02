import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';
import { ConfigPropertiesComponent } from 'src/app/shared/core/default-values.component.decorator';
import { BaseComponent } from 'src/app/shared/model/components/base-component.model';
import { Constants } from 'src/app/shared/model/enums';
import { SplashScreenService } from 'src/app/shared/service/root/splash-screen.service';
import { PersonaModel } from '../model/persona.model';
import { PersonaService } from '../services/persona.service';

@ConfigPropertiesComponent({
  title: 'Catálogo',
  description: 'Permite el registro , edición y eliminación de catálogos',
  iconFA: 'check',
  columns: ["dni", "nombres", "apellidos"],
})

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component extends BaseComponent implements OnInit {
  @ViewChild(TableContentComponent, { static: true }) content: TableContentComponent<any>;
  constructor(private personaService: PersonaService,
    private activatedRouter: ActivatedRoute,
    private splash: SplashScreenService) { super(); }

  async ngOnInit(): Promise<void> {
    this.splash.show();
    setTimeout(() => {
      
    }, 5000);
    // console.log( this.activatedRouter.snapshot.url);
    // this.content.columns = ["dni", "nombres", "apellidos"];
    await this.listar();
    this.activatedRouter.snapshot.paramMap.get('id')
    this.splash.hide();
  }

  async listar() {
    let { status, message, data } = await this.personaService.lista();
    if (status !== Constants.STATUS.Success) return;

    this.content.setDataSource(data.map((x: any) => new PersonaModel(x)))
  }

}
