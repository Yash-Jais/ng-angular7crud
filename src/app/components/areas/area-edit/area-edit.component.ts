import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/shared/area.model';
import { AreaService } from 'src/app/shared/area.service';

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.css']
})
export class AreaEditComponent implements OnInit {
  area = new Area;
  areaId: any;
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

  constructor(private areaService: AreaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.areaId = params['areaId'];
      //console.log(this.areaId);

    })
    this.getStates();
    this.getAreaData();

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

  /* Method used to fetch particular area */
  getAreaData() {
    this.areaService.getAreaData(this.areaId).subscribe((areaData) => {
      this.area = areaData;
      // this.selectedCities.push(this.area.cityName)
      this.selectedStates.push(this.area.states.name)
      // debugger
      console.log(this.area);
    })
  }
  /* Method used to update Area */
  updateArea() {
    if (this.selectedCities.length != 0 && this.selectedStates.length != 0) {
      this.area.cityName = this.selectedCities[0]['name'];
      this.area.cityId = this.selectedCities[0]['id'];
      this.state.id = this.selectedStates[0]['id'];
      this.state.name = this.selectedStates[0]['name'];
      this.area.states = this.state;
      this.area.updateDateTime = new Date(Date.now());
      this.areaService.updateArea(this.areaId, this.area).subscribe(() => {
        this.router.navigate(['areas/list-area']);
      })
    }
    else {
      alert("please select state and city first");
    }
  }
}
