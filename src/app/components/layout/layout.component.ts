import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = '';


  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    // console.log(value);
    this.title = value;
  }

}
