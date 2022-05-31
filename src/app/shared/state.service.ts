import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private firestore: AngularFirestore) { }

  async createState(state) {
    let data = JSON.parse(JSON.stringify(state)); //Object 
    data["createDateTime"] = new Date(Date.now());
    data["updateDateTime"] = new Date(Date.now());
    let stateTransaction = await this.firestore.collection('states').add(data)
    let transactionId = stateTransaction.id;

    await this.firestore
      .collection('states')
      .doc(transactionId)
      .update({ 'id': transactionId });

    return { transactionId };
  }

  getStats() {
    return this.firestore.collection('states', ref => ref.orderBy("createDateTime", "desc")).snapshotChanges();
  }

}
