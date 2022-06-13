import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private firestore: AngularFirestore) { }


  /* Method used to create State */
  async createState(state) {

    let stateTransaction = await this.firestore.collection('states').add(state)
    let transactionId = stateTransaction.id;

    /** this is for updating the id in the same Document */
    await this.firestore
      .collection('states')
      .doc(transactionId)
      .update({ 'id': transactionId });

    return { transactionId };
  }

  /* Method used to display all States */
  getStats(): Observable<any> {
    return this.firestore.collection('states', ref => ref.orderBy("createDateTime", "desc")).valueChanges();
  }

  /* Method used to display Particular state */
  getStateDetail(stateId: any): Observable<any> {
    return this.firestore.collection('states', ref => ref.where("id", "==", stateId)).valueChanges();
  }

  /* Method used to Update State */
  updateState(stateId, stateData): Observable<any> {
    return new Observable((observer) => {
      this.firestore.collection('states').doc(stateId).update(stateData)
        .then((res) => {
          observer.next({
            key: res
          })
        })
        .catch((err) => {
          observer.next({
            key: err
          })
        })
    })
  }
  /* End Update */

}
