import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';


import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(
    protected service: EmployeeService,
    private firestore: AngularFirestore,
    // public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullname: '',
      position: '',
      empcode: '',
      mobile: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection("Employee").add(data);
    else
      this.firestore.doc("Employee/" + form.value.id).update(data);

    this.resetForm(form);
    // this.toastr.success("Data added successfully!");
  }

}
