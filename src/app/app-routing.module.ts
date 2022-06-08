import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasahboardComponent } from './components/dasahboard/dasahboard.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StateComponent } from './components/state/state.component';

const routes: Routes = [
  { path: "dashboard", component: DasahboardComponent },
  {
    path: "employees",
    component: EmployeesComponent, //Main Component
    children: [
      { path: "create-employee", component: EmployeeComponent },
      { path: "list-employee", component: EmployeeListComponent }
    ]
  },
  { path: "states", component: StateComponent },

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
