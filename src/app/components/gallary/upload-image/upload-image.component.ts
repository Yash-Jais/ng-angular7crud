import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Gallary } from 'src/app/shared/gallary.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  gallary = new Gallary();
  imgSrc = "";
  selectedImage: any;


  /* Dropdown properties for Category */
  dropdownSettings = {};
  selectedCategory: Array<any> = [];
  categoryList: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    this.categoryList = [
      { id: 1, name: "Animal" },
      { id: 2, name: "Vehicle" },
      { id: 3, name: "Birds" },
      { id: 4, name: "Electronix" },
    ]
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const Reader = new FileReader();
      Reader.onload = (e: any) => this.imgSrc = e.target.result;
      Reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
      this.imgSrc = "";
    }
  }
}
