import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee = new Employee; //using object we can handle data
  employeeId: any;  //Particular Employee id

  constructor(private route: ActivatedRoute, private EmployeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log("id" + params);
      this.employeeId = params['empId'];
    })
    this.getEmployeeDetail(this.employeeId);
  }

  /* Method used to fetch all data of particular Employee ID */
  getEmployeeDetail(id: any) {
    this.EmployeService.getEmployeeDetail(this.employeeId).subscribe(empData => {
      console.table(empData);
      this.employee = empData[0];

      console.log(this.employee);

    })
  }
  /* Method used to update the data */
  updateEmployee() {
    this.EmployeService.updateEmployee(this.employee.id, this.employee).subscribe(res => {
      this.router.navigate(['employees/list-employee'])
    })
  }

}
function queryParams(arg0: string[], queryParams: any, arg2: {}) {
  throw new Error('Function not implemented.');
}

