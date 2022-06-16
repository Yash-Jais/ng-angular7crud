import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Area } from './area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private firestore: AngularFirestore) { }

  /* List of States */
  getStates() {
    return this.firestore.collection('states').valueChanges();
  }

  /* Get city by State id */
  getCityByState(id: any) {
    return this.firestore.collection('cities', ref => ref.where("stateId", "==", id)).valueChanges();
  }

  /* List of areas */
  getAreas(): Observable<any> {
    return this.firestore.collection('areas', ref => ref.orderBy("updateDateTime", "desc")).valueChanges();
  }

  /* Particular area data */
  getAreaData(id: any) {
    return this.firestore.collection('areas').doc(id).valueChanges();
  }

  /* Creating Area */
  async createArea(area: Area) {
    let data = JSON.parse(JSON.stringify(area))
    debugger
    // console.log(data['name']);

    let areaTransaction = await this.firestore.collection('areas').add(data)
    let transactionId = areaTransaction.id;
    await this.firestore.collection('areas').doc(transactionId).update({ 'id': transactionId });
    return transactionId;
  }

  updateArea(areaId, areaData) {
    return new Observable((observer) => {
      this.firestore.collection('areas').doc(areaId).update(areaData).then(res => observer.next({ key: res })).catch(err => observer.next({ key: err }));
    })
  }

  /* Delete Particular Area */
  deleteArea(id: any) {
    return this.firestore.collection('areas').doc(id).delete();
  }
}
