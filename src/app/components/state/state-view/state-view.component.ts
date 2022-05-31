
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/state.model';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  listState: State[];

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getState();
  }

  getState() {
    this.stateService.getStats()
      .subscribe(listArray => {
        this.listState = listArray.map(items => {
          return {
            ...items.payload.doc.data() as State
          }
        })
      });

  }
}
