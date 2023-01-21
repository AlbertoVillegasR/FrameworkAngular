import { Component, OnInit, ViewChild } from '@angular/core';
import { TableContentComponent } from 'src/app/shared/components/table-content/table-content.component';
import { PersonaModel } from '../model/persona.model';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
  @ViewChild(TableContentComponent, { static: true }) content: TableContentComponent<any>;
  constructor(private personaService: PersonaService) {}

  async ngOnInit(): Promise<void> {
    this.content.columns = ["dni", "nombres", "apellidos"];
    await this.listar();
  }
  
  async listar(){
    let {status,message,data} = await this.personaService.lista();
    console.log("despues del service");
    
    this.content.setDataSource(data.map((x:any)=> new PersonaModel(x)))
  }

}
