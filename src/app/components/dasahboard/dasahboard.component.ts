import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City, State } from 'src/app/shared/address.model';
import { AddressService } from 'src/app/shared/address.service';

import { Employee } from "src/app/shared/employee.model";

@Component({
  selector: 'app-dasahboard',
  templateUrl: './dasahboard.component.html',
  styleUrls: ['./dasahboard.component.css']
})
export class DasahboardComponent implements OnInit {



  totalEmployees = 0;
  totalStates = 0;
  totalCities = 0;
  totalAreas = 0;
  totalCategories = 0;

  constructor(private router: Router, private route: ActivatedRoute, private addressService: AddressService) { }

  ngOnInit() {
    this.getEmployee();
    this.getState();
    this.getCity();
  }


  /*************************************
   * Below methods are used to redirect into page.
   *************************************/
  goToEmployees() {
    this.router.navigate(['employees/list-employee']);
  }
  goToState() {
    this.router.navigate(['states/view-state']);
  }
  goToCity() {
    this.router.navigate(['cities/list-city']);
  }
  goToArea() {
    this.router.navigate(['cities/list-city']);
  }

  /************************************
   * Below methods are used to count totals
   ************************************/

  getEmployee() {
    this.addressService.getTotalEmployee().subscribe(res => {
      this.totalEmployees = res.length
    })
  }

  getState() {
    this.addressService.getTotalState().subscribe((res) => {
      this.totalStates = res.length
    })
  }

  getCity() {
    this.addressService.getTotalCity().subscribe((res) => {
      this.totalCities = res.length
    })
  }

}
