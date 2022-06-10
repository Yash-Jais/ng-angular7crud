import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { State } from './state.model';

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
  getStats() {
    return this.firestore.collection('states', ref => ref.orderBy("createDateTime", "desc")).valueChanges();
  }


}
