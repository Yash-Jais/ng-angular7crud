import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/state.model';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-state-edit',
  templateUrl: './state-edit.component.html',
  styleUrls: ['./state-edit.component.css']
})
export class StateEditComponent implements OnInit {
  //Properties for State Details
  state = new State;
  stateId: any;

  //Properties for Validation
  submitted: false;
  error = {
    title: false
  }

  constructor(private stateService: StateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      //console.log("id" + params);
      this.stateId = params['stateId']
    });
    // console.log(this.stateId);
    this.getStateDetail(this.stateId);
  }


  /* Method used to display Particular State */
  getStateDetail(id: any) { //Getting state Id
    this.stateService.getStateDetail(this.stateId).subscribe((stateData) => {
      this.state = stateData[0];
      //console.table(this.state);
    })
  }

  /* Method used to update the State */
  updateState() {
    //console.table(this.state);
    this.stateService.updateState(this.stateId, this.state).subscribe((updatedData) => {
      this.router.navigate(['states/view-state']);
    })
  }




  /**************************
   * VALIDATION PART
   **************************/

  checkName(state: any) {
    const namePattern = /^[0-9]+$/;
    //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let valid = true;

    if (state && !namePattern.test(state)) { //Check whether it is matching or not
      this.error.title = true;
      // $('#StateName').focus();
      valid = false;
    } else {
      this.error.title = false;
    }
  }

  /* Validation After submit */
  validate() {

    let valid = true;
    // const namePattern = /^[0-9]+$/;
    const namePattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    // /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/;
    // /^[a-zA-Z][\s]$/
    console.log("State create", this.state.name)
    if (this.state.name && !namePattern.test(this.state.name)) {
      this.error.title = true;
      // $('#StateName').focus();
      valid = false;
    }
  }
}