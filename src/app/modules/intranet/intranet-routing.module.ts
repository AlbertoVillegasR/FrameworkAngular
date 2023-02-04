import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table1Component } from './views/table1/table1.component';
import { PersonComponent } from './views/person/person.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'table1',
        component: Table1Component
      },
      {
        path: 'person',
        component: PersonComponent
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
