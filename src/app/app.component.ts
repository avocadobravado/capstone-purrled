import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Profile } from './models/profile.model';
import { ProfileService } from './services/profile.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProfileService, AuthenticationService]
})
export class AppComponent {
  user;

  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

login() {
  this.authService.login();
}

logout() {
  this.authService.logout();
}
  // constructor(private authService: AuthenticationService, private router: Router) { }
  //
  // signIn() {
  //   this.authService.login();
      // .then(resolve => this.router.navigate(['friends']))
      // .catch(error => this.errorMsg = error.message);
  }
