import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
// import { State } from 'src/app/shared/state.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  exist() {
    if (window.open("http://192.168.20.57:4200/states/create-state")) {
      console.log(true);

    }

  }

}

