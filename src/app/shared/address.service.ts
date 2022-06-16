import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private firestore: AngularFirestore) { }

  getTotalEmployee(): Observable<any> {
    return this.firestore.collection('Employee').valueChanges();
  }

  getTotalState() {
    return this.firestore.collection('states').valueChanges();
  }
  getTotalCity() {
    return this.firestore.collection('cities').valueChanges();
  }
  getTotalArea() {
    return this.firestore.collection('areas').valueChanges();
  }
}
