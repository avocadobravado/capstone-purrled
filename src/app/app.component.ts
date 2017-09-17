import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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
  private isLoggedIn: boolean;
  private userName: string;
  user: Observable<firebase.User>;
  displayName: string;

  constructor(
    public profileService: ProfileService,
    public authService: AuthenticationService) {
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
  }
