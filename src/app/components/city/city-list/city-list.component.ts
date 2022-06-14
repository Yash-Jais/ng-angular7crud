import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { City } from 'src/app/shared/city.model';
import { CityService } from 'src/app/shared/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  page = 1;
  listCity: City[];

  constructor(private cityService: CityService, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getCities();
  }

  /* List of Cities */
  getCities() {
    this.cityService.getCities().subscribe((cities) => {
      this.listCity = cities;
    })
  }
  editCity(city: City) {
    this.router.navigate(['cities/edit-city'], { queryParams: { cityId: city.id } });
  }

  /* Delete City */
  deleteCity(id: any) {
    this.firestore.collection('cities').doc(id).delete();
    this.router.navigate(['cities/list-city']);
  }
}
