import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Project } from '../models/project.model';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  displayName: string;
  uid: string;

  constructor(public afAuth: AngularFireAuth, private database: AngularFireDatabase, public router: Router, private profileService: ProfileService) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    // Create a new profile if necessary
    this.user.subscribe(auth => {
     if (auth !== undefined && auth !== null) {
       this.createProfileIfNoneExists(auth);
       this.router.navigate(['/projects']);
      }
      this.displayName = auth.displayName;
      this.uid = auth.uid;
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  getUserName(uid: string) {
    this.database.object('profile/');
  }

  getUserUid():string {
    var userObject: firebase.User;
    this.user.subscribe(auth => {
     if (auth !== undefined && auth !== null) {
       userObject = auth;
      }
    });
    return userObject.uid;
  }

  createProfileIfNoneExists(user: firebase.User) {
    this.database.list('/profiles', {
      query: {
        orderByChild: 'uid',
        equalTo: user.uid,
        limitToFirst: 1
       }
     }).subscribe(result => { if (result.length===0) {
        this.profileService.addProfile(user.uid, user.displayName, user.photoURL);
      }})
    }
  }
