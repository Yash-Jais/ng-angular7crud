import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private firestore: AngularFirestore) { }

  /* List of all states */
  getStateList() {
    return this.firestore.collection('states').valueChanges();
  }
}
