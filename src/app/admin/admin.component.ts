import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ProjectService, AuthenticationService, AngularFireAuth]
})
export class AdminComponent implements OnInit {
  private user: firebase.User;

  constructor(private projectService: ProjectService, private afAuth: AngularFireAuth, private authService: AuthenticationService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
     if (auth !== undefined && auth !== null) {
       this.user = auth;
      }
     });
  }

  submitForm(projectName: string, skill: string, yarnAmount: number, yarnWeight: string, needleSize: number, patternInfo: string) {
     if (this.user===undefined) {
       console.log('User is undefined.');
       return;
     }
    var newProject: Project = new Project(this.user.uid, projectName, skill, yarnAmount, yarnWeight, needleSize, patternInfo);
    this.projectService.addProject(newProject);
  }
}
