import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';
import { DasahboardComponent } from './components/dasahboard/dasahboard.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { StateEditComponent } from './components/state/state-edit/state-edit.component';
import { StateViewComponent } from './components/state/state-view/state-view.component';
import { StateComponent } from './components/state/state.component';

const routes: Routes = [
  { path: "", component: DasahboardComponent },
  { path: "dashboard", component: DasahboardComponent },
  {
    path: "employees",
    component: EmployeesComponent, //Main Component
    children: [
      { path: "create-employee", component: EmployeeComponent },
      { path: "list-employee", component: EmployeeListComponent },
      { path: "edit-employee", component: EmployeeEditComponent },

    ]
  },
  {
    path: "states",
    component: StateComponent,
    children: [
      { path: "create-state", component: StateCreateComponent },
      { path: "view-state", component: StateViewComponent },
      { path: "edit-state", component: StateEditComponent },
    ]
  },
  {
    path: "cities",
    component: CityComponent,
    children: [
      { path: "create-city", component: CityCreateComponent },
      { path: "list-city", component: CityListComponent },
      { path: "edit-city", component: CityEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const RoutingComponent: any = {
//   DasahboardComponent,
//   EmployeesComponent,
//   StateComponent
// }
