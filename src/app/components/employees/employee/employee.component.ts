import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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

  /* Validation Property */
  submitted = false;
  namePattern: string;
  error = {
    title: false
  }

  /* Form Property */

  constructor(
    protected employeeService: EmployeeService,
    private firestore: AngularFirestore,
    private router: Router
    // public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm(this.employee);
  }

  /* Method used to clear the value of input field */
  resetForm(employee: Employee) {
    if (employee != null) {
      employee.id = null;
      employee.fullname = '';
      employee.empcode = '';
      employee.position = '';
      employee.mobile = '';
      employee.createDateTime = '';
      employee.updateDateTime = '';
    }
  }



  /* Following method used to create Employee */
  createEmployee() {
    this.submitted = true;
    // if (this.validate()) {
    this.employee.createDateTime = new Date(Date.now());
    this.employeeService.createEmployee(this.employee).then(res => {
      this.resetForm(this.employee);
    }).catch(err => {
      console.log(err);
    })
    // }
  }



  /******************************
   *  Validation Part
   * ****************************
   *
   * /

  /* Method used to check name is written valid or not in runtime */
  checkName(fullname) {
    const namePattern = /(^[A-Za-z]{1,16})([\s]{0,1})([A-Za-z\s]{1,16})([\.]{0,1})([A-Za-z\s]{1,16})$/;
    let valid = true;
    if (fullname && !namePattern.test(fullname)) {
      this.error.title = true;//if error comes it becomes true.
      valid = false;
      // this.namePattern = "Name contains only alphabets"
    }
    else {
      this.error.title = false;
    }
  }

  /* Method used to check EmpCode is written valid or not  in runtime */
  checkEmpcode(empcode) { }

  /* Method used to check position is written valid or not  in runtime */
  checkPosition(position) { }

  /* Method used to check Mobile is written valid or not  in runtime */
  checkMobile(mobile) { }

  /* After submitting the form following function is used */
  validate() {
    let valid = true;
    const namePattern = /(^[A-Za-z]{1,16})([\s]{0,1})([A-Za-z\s]{1,16})([\.]{0,1})([A-Za-z\s]{1,16})$/;
    // console.table(this.employee);
    if (this.employee.fullname && !namePattern.test(this.employee.fullname)) {
      this.error.title = true;
      valid = false;
    }
    if (!this.employee.fullname) {
      valid = false
    }
    return valid;
  }

  /*******************************
   *  END VALIDATION
   ******************************/





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
