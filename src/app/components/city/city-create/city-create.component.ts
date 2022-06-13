import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/address.model';
import { AddressService } from 'src/app/shared/address.service';


@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  city = new Address;

  states = []; //This property shows dropdown list
  selectedStates = []; //Push selected state data into this property
  dropdownSettingsStates = {};//This property handles the dropdown

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.dropdownSettingsStates = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };
    this.getStates();
  }


  getStates() {
    this.addressService.getStateList().subscribe((states) => {
      this.states = states;
    });
  }
  onItemSelect(item) {
    console.log(item);

  }
  onSelectAll(items: any) {
    console.table(items);
  }
}
