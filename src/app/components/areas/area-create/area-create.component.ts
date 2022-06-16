import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from 'src/app/shared/area.model';
import { AreaService } from 'src/app/shared/area.service';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css']
})
export class AreaCreateComponent implements OnInit {
  area = new Area();
  state = {
    id: '',
    name: ''
  }
  /* dropdown properties for States */
  stateList = [];
  dropdownSettingsStates = {};
  selectedStates = [];

  /* dropdown properties for Cities */
  cityList = [];
  dropdownSettingsCities = {};
  selectedCities = [];

  constructor(private areaService: AreaService, private router: Router) { }

  /* Automatically Initiated */
  ngOnInit() {
    this.dropdownSettingsStates = {
      singleSelection: true,
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
      idField: 'id',
      textField: 'name',
      selectAlltext: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 1,


    }

    this.dropdownSettingsCities = {
      singleSelection: true,
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
      idField: 'id',
      textField: 'name',
      selectAlltext: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 1,
      noDataAvailablePlaceholderText: "Please select valid state",

    }

    this.getStates();

  }
  /* Reset form after submitting the form */
  resetForm(area: Area) {
    if (area != null) {
      area.id = '';
      area.cityId = '';
      area.cityName = '';
      area.createDateTime = '';
      area.name = '';
      area.states = {};
      area.updateDateTime = '';
      this.selectedCities = [];
      this.selectedStates = [];
    }
  }
  /* Display cities by states */
  modfiedCities(state) {
    //console.log(state.id);
    this.cityList = [];
    this.getCities(state.id);
  }

  /* Method used to display States */
  getStates() {
    this.areaService.getStates().subscribe((res) => {
      this.stateList = res;
      console.log(this.stateList);
    });
  }

  /* Method used to display Cities */
  getCities(id: any) {
    this.areaService.getCityByState(id).subscribe((res) => {
      this.cityList = res;
      console.log(this.cityList);
    });
  }


  /* Create Area  */
  createArea() {
    if (this.selectedCities.length != 0 && this.selectedStates.length != 0) {
      this.area.cityName = this.selectedCities[0]['name'];
      this.area.cityId = this.selectedCities[0]['id'];
      this.state.id = this.selectedStates[0]['id'];
      this.state.name = this.selectedStates[0]['name'];
      this.area.states = this.state;
      this.area.createDateTime = new Date(Date.now());
      this.area.updateDateTime = new Date(Date.now());
      this.areaService.createArea(this.area)
      this.resetForm(this.area);
    }
    else {
      alert("please select state and city first");
    }
    //console.log(this.area);

  }
}
