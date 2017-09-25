import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  private isLoggedIn: boolean;
  private userName: string;
  user: Observable<firebase.User>;
  displayName: string;
  uid: string;

  constructor(
    public profileService: ProfileService,
    public authService: AuthenticationService,
    private router: Router) {
    this.user = this.authService.user;
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.uid = user.uid;
      }
    });
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        this.router.navigate(['/projects']);
      } else {
        return console.log('hi');
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
