/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';

/* firebase */
import { environment } from 'src/environments/environment';

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

/* Services */
import { EmployeeService } from './shared/employee.service';
import { StateService } from './shared/state.service';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    RouterModule,
  ],
  providers: [EmployeeService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
