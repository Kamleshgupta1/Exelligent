import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FiledownloadService } from '../filedownload/filedownload.service';

//..........................Saving post to firestore.........................

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit {

  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean;
  public hasAnotherDropZoneOver:boolean;
  response:string;

  profileForm: FormGroup;
  
  //..........................Saving post to firestore.........................
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  constructor (private storage: AngularFireStorage, private afs: AngularFirestore, private fb: FormBuilder, private fd: FiledownloadService){
    this.uploader = new FileUploader({
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    }) ;

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = ''; 

    this.uploader.response.subscribe( res => this.response = res );
  }
  
  ngOnInit() {
  
    this.profileForm = this.fb.group({
        name: [''],
        profile: [''],
    });
    
    
    //..........................Saving post to firestore.........................
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      });
      
    
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  
  //...........................Uploading file to server........................
  
  uploadFile(event) {
    this.fd.uploadFile(event);
  }
  
  //..........................Saving post to firestore.........................
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }
  
}
