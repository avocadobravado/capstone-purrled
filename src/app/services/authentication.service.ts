import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  displayName: string;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, public router: Router) {
    this.user = afAuth.authState;
    var user = firebase.auth().currentUser;
this.afAuth.authState.subscribe(
    (auth) => {
  if (auth != null) {
    // this.user = db.list.object('users/' + auth.uid);
  }
});
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
