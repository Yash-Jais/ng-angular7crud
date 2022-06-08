import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee.model';
// import { ToastrService } from 'ngx-toastr';


import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = new Employee();
  /*  Properties  */
  submitted = false;
  error = {
    title: false
  }

  constructor(
    protected service: EmployeeService,
    private firestore: AngularFirestore,
    // public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  /* Method used to clear the value of input field */
  resetForm() {

  }

  /* Following method used to create Employee */
  createEmployee() {

  }

  /* Method used to check name is written valid or not */
  checkName(name: string) {
    const namePattern = /^[A-Za-z][A-Za-z_]{1,99}$/;
    let valid = true;
    if (name && !namePattern.test(name)) {
      this.error.title = true;
      valid = false;
    }
    else {
      this.error.title = false;
    }
  }

  /* After submitting the form following function is used */
  validate() {

  }





  /* ****************************
           Second Method
  *******************************/


  /*   resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
      this.service.formData = {
        id: null,
        fullname: '',
        position: '',
        empcode: '',
        mobile: '',
      }
    } */

  /* onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection("Employee").add(data);
    else
      this.firestore.doc("Employee/" + form.value.id).update(data);

    this.resetForm(form);
    // this.toastr.success("Data added successfully!");
  } */

}
