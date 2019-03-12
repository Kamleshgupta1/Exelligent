import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FiledownloadService } from '../../filedownload/filedownload.service';

//..........................Saving post to firestore.........................

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {   
  id: string;
}


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  profileForm: FormGroup;
  
  //..........................Saving post to firestore.........................
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  constructor (private afs: AngularFirestore, private fd: FiledownloadService){
  }
  
  ngOnInit() {

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

  

 getPost(postId) {
    this.fd.getPost(postId);
  }
  
  deletePost(postId) {
    this.fd.deletePost(postId);
  }
  
  getDoc() {
    this.fd.onclick();
  }
  
}