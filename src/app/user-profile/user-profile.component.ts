import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {


  state: string = '';
  error: any;
  user: User;

  name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router, private db: AngularFireDatabase) { 
  
      this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
}
  
  ngOnInit() {
  }
  
 /*
  register(name, email, mobile, password) {
      this.db.database().ref('users/' + 'user.uid').set({
        name: name,
        email: email,
        mobile : mobile,
        password : password
      });
    }
   */

  async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['admin/list']);
    } catch (e) {
        alert("Error!"  +  e.message);
    }
 }

async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
   // this.sendEmailVerification();
}

 async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
 }

  loginfb() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  
  logingoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

}


 
