import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { routing } from './app.routing';
import { FriendsComponent } from './friends/friends.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

//firebase
import { masterFirebaseConfig } from './api-keys';
import {
  AngularFireModule
} from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProcessComponent } from './process/process.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FriendsComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    AdminComponent,
    EditProjectComponent,
    HomeComponent,
    ProfileComponent,
    ProjectListingComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
