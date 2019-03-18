import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.scss']
})
export class MathsComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  
  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) {}
  
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);  // store in storage
    this.afs.collection('document').add({'doc': file.name});  // store in firestore > document

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
   
     this.downloadURL = fileRef.getDownloadURL();
    
  }
  
  ngOnInit() {
  }
}
