import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { City } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private firestore: AngularFirestore) { }

  /* List of all states */
  getStateList() {
    return this.firestore.collection('states').valueChanges();
  }

  /* List of All Cities */
  getCities(): Observable<any> {
    return this.firestore.collection('cities', ref => ref.orderBy("updateDateTime", "desc")).valueChanges();
  }

  /* Get Particular city */
  getCityData(cityId: any) {
    return this.firestore.collection('cities').doc(cityId).valueChanges();
  }

  /* Add cities */
  async createCity(city: City) {
    let data = JSON.parse(JSON.stringify(city));
    // console.log(data);

    let cityTransaction = await this.firestore.collection('cities').add(data);
    let transactionId = cityTransaction.id;

    await this.firestore.collection('cities').doc(transactionId).update({ 'id': transactionId });
    return transactionId;
  }

  /* Update Cities */
  updateCity(cityId, cityData) {
    return new Observable(observer => {
      this.firestore.collection('cities').doc(cityId).update(cityData).then(res => observer.next({ key: res })).catch(err => observer.next({ key: err }))
    })
  }

  /* Delete City */
  deleteCity(id) {

  }
}







