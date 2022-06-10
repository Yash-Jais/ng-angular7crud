
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/state.model';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {
  page = 1;//pagination
  listState: State[]; //State Data

  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit() {
    this.getState();
  }

  getState() {
    this.stateService.getStats()
      .subscribe(listArray => {
        this.listState = listArray;
      });
  }

  editState(state) {
    let stateId = state.id;
    //console.log(stateId);
    this.router.navigate(['states/edit-state'], { queryParams: { stateId: stateId } })
  }
}
