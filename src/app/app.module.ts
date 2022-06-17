/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

/* firebase */
import { environment } from 'src/environments/environment';
// import { ToastrModule } from 'ngx-toastr';

/* Components */
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StateComponent } from './components/state/state.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { StateViewComponent } from './components/state/state-view/state-view.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { DasahboardComponent } from './components/dasahboard/dasahboard.component';
import { AreaCreateComponent } from './components/areas/area-create/area-create.component';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { AreaListComponent } from './components/areas/area-list/area-list.component';
import { StateEditComponent } from './components/state/state-edit/state-edit.component';
import { CityComponent } from './components/city/city.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { AreasComponent } from './components/areas/areas.component';
import { AreaEditComponent } from './components/areas/area-edit/area-edit.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { UploadImageComponent } from './components/gallary/upload-image/upload-image.component';
import { ListImagesComponent } from './components/gallary/list-images/list-images.component';

/* Services */
import { EmployeeService } from './shared/employee.service';
import { StateService } from './shared/state.service';
import { CityService } from './shared/city.service';
import { AddressService } from './shared/address.service';
import { AreaService } from './shared/area.service';
import { GallaryService } from './shared/gallary.service';
// import { AngularFirestoreModule } from 'angularfire2/firestore';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NavbarComponent,
    StateComponent,
    StateCreateComponent,
    StateViewComponent,
    OffcanvasComponent,
    DasahboardComponent,
    EmployeeEditComponent,
    StateEditComponent,
    CityComponent,
    CityCreateComponent,
    CityEditComponent,
    CityListComponent,
    AreasComponent,
    AreaCreateComponent,
    AreaEditComponent,
    AreaListComponent,
    GallaryComponent,
    UploadImageComponent,
    ListImagesComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    RouterModule,
    NgMultiSelectDropDownModule.forRoot()
    // ToastrModule.forRoot()
  ],
  providers: [EmployeeService, StateService, CityService, AddressService, AreaService, GallaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
