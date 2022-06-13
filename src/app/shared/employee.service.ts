import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  /* Method used to add Employee */
  async createEmployee(employee: Employee) {
    let data = JSON.parse(JSON.stringify(employee));//Object
    data['createDataTime'] = new Date(Date.now());
    data['updateDateTime'] = new Date(Date.now());
    let employeeTransaction = await this.firestore.collection('Employee').add(data);
    let transactionId = employeeTransaction.id;

    await this.firestore.collection('Employee').doc(transactionId).update({ 'id': transactionId });

    return { transactionId };
  }



  /********************
   * Complete Details of Employee
   ********************/
  getEmployee(): Observable<any> {
    return this.firestore.collection("Employee", ref => ref.orderBy('createDateTime', 'desc')).valueChanges();
  }

  /** 
   * Get Details of Particular Employee
   */
  getEmployeeDetail(empId: any): Observable<any> {
    return this.firestore.collection('Employee', ref => ref.where("id", "==", empId)).valueChanges();
  }


  /* Method used to Update Employee */
  updateEmployee(empId, empData): Observable<any> {
    return new Observable((observer) => {
      this.firestore.collection('Employee').doc(empId).update(empData).then((res) => {
        observer.next({
          key: res,
        });
      }).catch(err => {
        observer.next({
          key: false,
        })
      });
    })


    /* this.firestore.collection("Employee", ref => ref.where("id", "==", empId))
      .doc(empId).update(empData)
      .then(res => {
        console.log("Successfully Updated", res);
      })
      .catch(err => {
        console.log("Something went Wrong", err);
      }) */
  }


  /* Delete Particular Employee */
  async deleteEmployee(id: string) {
    const del = await this.firestore.collection("Employee").doc(id).delete();
    return del;
  }
}
