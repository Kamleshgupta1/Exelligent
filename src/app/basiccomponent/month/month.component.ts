import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FiledownloadService } from '../../filedownload/filedownload.service';

export interface AccountDeposit { doc: string; }
export interface AccountDepositId extends AccountDeposit { id: string; }

interface Doc {
    doc:any;
}

interface DocsId extends Doc {
  id: string;
}

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  private depositCollection: AngularFirestoreCollection<AccountDeposit>;
  deposits: Observable<AccountDepositId[]>;
  
  docsCol: AngularFirestoreCollection<Doc>;
  docs: any;
  
  doc:any;
  getdoc:any;
  
  docDoc: AngularFirestoreDocument<Doc>;
  //doc: Observable<Doc>;
  
  constructor(private afs: AngularFirestore, private fd: FiledownloadService) {
    
    this.depositCollection = afs.collection<AccountDeposit>('document/');
    this.deposits = this.depositCollection.stateChanges(['added']).pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as AccountDeposit;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
    
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
    
  }

  ngOnInit() {
  }
  
  getDoc(DocsId) {
   this.getdoc = this.fd.getDoc(DocsId);
  }
  
  getDocoff() {
    this.fd.onclick();
  }
  
}
