import { Component, OnInit } from '@angular/core';
import { Gallary } from 'src/app/shared/gallary.model';
import { GallaryService } from 'src/app/shared/gallary.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  gallary = new Gallary();
  gallaryImage: any;//used in view part
  selectedImage: any;//used for putting the value in modal.imageUrlC
  image = '';

  /* Dropdown properties for Category */
  dropdownSettings = {};
  selectedCategory = [];
  categoryList = [];

  constructor(private gallaryService: GallaryService) { }

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

    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      Array.from(fileList).forEach(file => {
        let reader = new FileReader();
        let that = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
          let data = reader.result;
          that.gallaryImage = data;
          that.selectedImage = data;
          console.log(that.gallaryImage);
        };
        reader.onerror = function (error) {
        };
      })
    }
    else {
      this.gallaryImage = null
      this.selectedImage = null
      console.log(this.gallaryImage);
    }


    /*  if (event.target.files && event.target.files[0]) {
       const Reader = new FileReader();
       Reader.onload = (e: any) => this.imgSrc = e.target.result;
       Reader.readAsDataURL(event.target.files[0]);
       this.selectedImage = event.target.files[0];
       console.log(this.selectedImage);
 
     } else {
       this.selectedImage = null;
       this.imgSrc = "";
     } */
  }

  /* Method used to Upload and save the data into firebase */
  uploadImage() {
    if (this.gallaryImage && this.gallaryImage.includes(";base64,")) {
      this.gallaryService.uploadImage(this.gallaryImage, this.selectedCategory);
    }
  }


  /* Method used to clear all form data */
  clearData() {
    this.gallary.caption = '';
    this.gallary.description = '';
    this.selectedCategory = [];
    this.gallaryImage = "";
    this.selectedImage = "";
    this.image = "";
  }
}
