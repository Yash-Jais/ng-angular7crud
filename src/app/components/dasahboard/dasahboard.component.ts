import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dasahboard',
  templateUrl: './dasahboard.component.html',
  styleUrls: ['./dasahboard.component.css']
})
export class DasahboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToEmployees() {

    this.router.navigate(['employees']);//Mention File Name
  }
}
