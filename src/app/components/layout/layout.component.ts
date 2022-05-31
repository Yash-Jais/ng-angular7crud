import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = '';
  sideBarSetting = false;
  sideBarNgoSetting = false;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    // console.log(value);
    this.title = value;
    if (this.title == 'state' || this.title == 'city' || this.title == 'city-area' || this.title == 'employee') {
      this.sideBarSetting = true;
    }
    else if (this.title == 'ngo-Categories' || this.title == 'ngo-Registration' || this.title == 'ngo-Needs' || this.title == 'ngo-Feedback' || this.title == 'ngo-Followers') {
      this.sideBarNgoSetting = true;
    }
  }

}
