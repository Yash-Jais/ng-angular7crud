import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaCreateComponent } from './components/areas/area-create/area-create.component';
import { AreaEditComponent } from './components/areas/area-edit/area-edit.component';
import { AreaListComponent } from './components/areas/area-list/area-list.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';
import { DasahboardComponent } from './components/dasahboard/dasahboard.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ListImagesComponent } from './components/gallary/list-images/list-images.component';
import { UploadImageComponent } from './components/gallary/upload-image/upload-image.component';
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
  {
    path: "areas",
    component: CityComponent,
    children: [
      { path: "create-area", component: AreaCreateComponent },
      { path: "list-area", component: AreaListComponent },
      { path: "edit-area", component: AreaEditComponent },
    ]
  },
  {
    path: "gallary",
    component: GallaryComponent,
    children: [
      { path: "upload-image", component: UploadImageComponent },
      { path: "list-images", component: ListImagesComponent },
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
