import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  getEmployee(): Observable<any> {
    return this.firestore.collection("Employee", ref => ref.where("fullname", '!=', "Jagan").orderBy('fullname', 'asc')).snapshotChanges();
  }
}
