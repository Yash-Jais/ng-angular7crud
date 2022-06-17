import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from "angularfire2/storage";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import "firebase/storage"
@Injectable({
  providedIn: 'root'
})
export class GallaryService {
  private basepath = "uploads/";
  filename = "";
  filepath = "";

  constructor(private storage: AngularFireStorage, private firestore: AngularFirestore) { }

  uploadImage(data, category) {
    //console.log(data, category);
    if (category == "Animal" || category == "Vehicle" || category == "Birds" || category == "Electronix") {
      this.basepath = "assets/";
    }
    let date = new Date();
    let id = date.getTime().toString();
    this.filename = 'pic' + id + '.jpg';
    this.filepath = this.basepath + id + this.filename;
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(this.filepath).putString(data, 'data_url');


    uploadTask.on('state_changed', function (snapshot) {

      /* let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      } */

    }, function (error) {
      // console.log(error);
    }, function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        /*  console.log('File available at', downloadURL);
         callBack(downloadURL, bucketIndex, imageIndex); */
      });
    });

    return new Observable((observer) => {
      uploadTask.on('state_changed', function (snapshot) {

        /*  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log('Upload is ' + progress + '% done');
         switch (snapshot.state) {
           case firebase.storage.TaskState.PAUSED: // or 'paused'
             console.log('Upload is paused');
             break;
           case firebase.storage.TaskState.RUNNING: // or 'running'
             console.log('Upload is running');
             break;
         } */
      }, function (error) {
        // console.log(error);
      }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          observer.next(downloadURL);
          // callBack(downloadURL, bucketIndex, imageIndex);
        });
      });
    });
  }
}
