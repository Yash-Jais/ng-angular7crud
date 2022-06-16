import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Area } from 'src/app/shared/area.model';
import { AreaService } from 'src/app/shared/area.service';


@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  page = 1;
  listAreas: Area[];

  constructor(private areaService: AreaService, private router: Router) { }

  ngOnInit() {
    this.getAreas();
  }
  /* List of Areas */
  getAreas() {
    this.areaService.getAreas().subscribe((areas) => {
      this.listAreas = areas;
    })
  }
  /* Edit Area */
  editArea(area: Area) {
    this.router.navigate(['areas/edit-area'], { queryParams: { 'areaId': area.id } })
  }

  /* Delete Area */
  deleteArea(id: any) {
    this.areaService.deleteArea(id);
    this.router.navigate(['areas/list-area'])
  }
}
