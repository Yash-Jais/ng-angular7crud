import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/state.model';
import { StateService } from "../../../shared/state.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-state-create',
  templateUrl: './state-create.component.html',
  styleUrls: ['./state-create.component.css']
})
export class StateCreateComponent implements OnInit {
  state = new State();
  submitted = false;

  error = {
    title: false,
  }
  constructor(private StateService: StateService, private router: Router) { }

  ngOnInit() {
    this.resetForm(this.state);
  }

  resetForm(state) {
    if (state != null) {
      state.id = null;
      state.name = '';
      state.createDateTime = '';
      state.updateDateTime = '';
    }
  }

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

  createState() {
    this.submitted = true;
    if (this.validate()) {
      this.state.createDateTime = new Date(Date.now());
      this.StateService.createState(this.state).then(res => {
        this.resetForm(this.state);
        this.router.navigate(['./state-view']);
      }).catch(err => {
        console.log(err);
      }
      );
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
    /* else if (this.need.quantity && !numberPattern.test(this.need.quantity)) {
      this.error.quantity = true;
      valid = false;
    } */
    /* else if (this.need.description && (this.need.description.length < 20)) {
      valid = false;
    } */
    /*  if (!this.state.name || !this.need.ngoname || !this.need.description || !this.need.category.id || !this.need.ngoid || !this.need.quantity) {
       valid = false;
       return valid;
     } */
    if (!this.state.name) {
      valid = false;
    }
    return valid;
  }
}
