/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';

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
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';

/* Services */
import { EmployeeService } from './shared/employee.service';
import { StateService } from './shared/state.service';
import { StateEditComponent } from './components/state/state-edit/state-edit.component';
import { CityComponent } from './components/city/city.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
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
  providers: [EmployeeService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
