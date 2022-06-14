import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City } from 'src/app/shared/city.model';
import { CityService } from 'src/app/shared/city.service';


@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  city = new City; //to store data of city 

  states = []; //This property shows dropdown list
  selectedStates = []; //Push selected state data into this property
  dropdownSettingsStates = {};//This property handles the dropdown

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit() {
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
    this.getStates();
    this.resetForm(this.city);
  }

  resetForm(city: City) {
    if (city != null) {
      this.selectedStates = [];
      city.createDateTime = '';
      city.updateDateTime = '';
      city.id = '';
      city.name = '';
      city.stateId = '';
      city.stateName = '';
    }
  }
  /* List all states */
  getStates() {
    this.cityService.getStateList().subscribe((states) => {
      this.states = states;
    });
  }

  createCity() {
    if (this.selectedStates[0]) { /* If state will not selected error occurs */
      this.city.stateId = this.selectedStates[0]['id'];
      this.city.stateName = this.selectedStates[0]['name'];
      this.city.isActive = false;
      this.city.createDateTime = new Date(Date.now());
      this.city.updateDateTime = new Date(Date.now());
      //console.log("City data", this.city);
      this.cityService.createCity(this.city);
      this.resetForm(this.city);
    }
    else {
      console.log("Problem generate");
    }

  }
}
