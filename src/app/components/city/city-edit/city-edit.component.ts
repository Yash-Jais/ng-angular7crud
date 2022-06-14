import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { City } from 'src/app/shared/city.model';
import { CityService } from 'src/app/shared/city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  city = new City;
  cityId: any;

  dropdownSettingsStates = {};
  states = [];
  selectedStates = [];

  constructor(private router: Router, private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cityId = params['cityId']
    });

    this.dropdownSettingsStates = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.getCityData();
    this.getStates();
  }

  /* It returns particular city */
  getCityData() {
    this.cityService.getCityData(this.cityId).subscribe(cityData => {
      this.city = cityData;
      let data = JSON.parse(JSON.stringify(cityData))
      console.log(data['name']);
      this.selectedStates = data['stateName']
      this.selectedStates = data['stateId']
    })
  }

  /* List all states */
  getStates() {
    this.cityService.getStateList().subscribe((states) => {
      this.states = states;
    });
  }

  updateCity() {
    this.city.updateDateTime = new Date(Date.now());
    this.city.stateId = this.selectedStates[0]['id'];
    this.city.stateName = this.selectedStates[0]['name'];
    // console.log(this.city, this.cityId);

    this.cityService.updateCity(this.cityId, this.city).subscribe(res => {
      this.router.navigate(['cities/list-city'])
    })
  }
}
