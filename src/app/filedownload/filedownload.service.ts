import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


//..........................Saving post to firestore.........................

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

interface Doc {
    doc:any;
}

interface DocsId extends Doc {
  id: string;
}

@Injectable()
export class FiledownloadService {
  
  //..........................Saving post to firestore.........................
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  
  title:string;
  content:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  //..........................Saving post to firestore - doc...............
  
  docsCol: AngularFirestoreCollection<Doc>;
  docs: any;
  
  doc:any;
  
  docDoc: AngularFirestoreDocument<Doc>;
  dox: Observable<Doc>;
  
  pdfSrc:string = '';
  
  uploadPercent: Observable<number>;
  downloadURL: any;
  
  constructor (private storage: AngularFireStorage, private afs: AngularFirestore){
   
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
      
    this.docsCol = this.afs.collection('docs');
    //this.docs = this.docsCol.valueChanges();
    this.docs = this.docsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Doc;
          const id = a.payload.doc.id;
          return { id, data };
        })
      });
      
      //.............file view from firestore - take doc url..............
      
      //this.pdfSrc = this.doc;
      this.pdfSrc = this.downloadURL;
   }
   
   //...........................Uploading file to server........................
  
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const task = this.storage.upload(filePath, file);
    
    const fileRef = this.storage.ref(filePath);
    this.uploadPercent = task.percentageChanges();
    this.downloadURL = fileRef.getDownloadURL();
    
    this.afs.collection('document').add({'doc': file.name});
  }
  
      getPost(postId) {
        this.postDoc = this.afs.doc('posts/'+postId);
        this.post = this.postDoc.valueChanges();
      }

      deletePost(postId) {
        this.afs.doc('posts/'+postId).delete();
      }
      
   //..................file view from firestore...............................
   
   getDoc(postId) {
        this.postDoc = this.afs.doc('document/'+postId);
        this.dox = this.docDoc.valueChanges();

   }
      
   onclick() {
    let img: any = document.querySelector("#file");
    if(typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }
      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}