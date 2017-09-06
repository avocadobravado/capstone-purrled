import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}


//   user: Observable<firebase.User>;
//   items: FirebaseListObservable<any[]>;
//   addProfile: FirebaseListObservable<any[]>;
//
//   constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
//     this.user = this.afAuth.authState;
//
//   }
//
//   login() {
//     var provider = new firebase.auth.GoogleAuthProvider();
//
//     // this.afAuth.auth.signInAnonymously();
//     firebase.auth().signInWithRedirect(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//   // The signed-in user info.
//     var user = result.user;
//
//     var queryObservable = this.database.list('/profiles', {
//       query: {
//         orderByChild: 'uid',
//         equalTo: user.uid
//       }
//     });
//     // if(queryObservable.length < 1) {
//       this.profileService.addProfile(new Profile (user.uid, this.bio,
//         this.favorites, this.friends));
//     // }
//
//   });//.catch(function(error) {
//     // Handle Errors here.
//     // var errorCode = error.code;
//     // var errorMessage = error.message;
//     // // The email of the user's account used.
//     // var email = error.email;
//     // // The firebase.auth.AuthCredential type that was used.
//     // var credential = error.credential;
//     // ...
//   //});
//   }
//
//   logout() {
//     this.afAuth.auth.signOut();
//   }
//
//   authUser() {
//     return this.user;
//   }
