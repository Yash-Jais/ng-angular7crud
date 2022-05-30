import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];

  constructor(private service: EmployeeService, public firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getEmployee().subscribe(anctionArray => {
      this.list = anctionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee
      })
    });
  }

  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this"))
      this.firestore.doc('Employee/' + id).delete();
    this.ngOnInit();
  }

}
