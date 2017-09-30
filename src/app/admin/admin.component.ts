import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [UploadService, ProjectService, AuthenticationService, AngularFireAuth]
})
export class AdminComponent implements OnInit {
  private user: firebase.User;
  files: FileList;
  upload: Upload;

  constructor(private projectService: ProjectService,
    private afAuth: AngularFireAuth,
    private authService: AuthenticationService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
     if (auth !== undefined && auth !== null) {
       this.user = auth;
      }
     });
  }

  handleFile(event) {
    this.files = event.target.files;
  }

  uploadFile(projectKey: string) {
    const fileToUpload = this.files;
    const fileIdx = _.range(fileToUpload.length);
    _.each(fileIdx, (idx) => {
      this.upload = new Upload(fileToUpload[idx], projectKey);
      this.uploadService.uploadFile(this.upload);
    });
  }

  submitForm(projectName: string, skill: string, yarnAmount: number, yarnWeight: string, needleSize: number, patternInfo: string) {
     if (this.user === undefined) {
       console.log('User is undefined.');
       return;
     }

    var newProject: Project = new Project(this.user.uid, projectName, skill, yarnAmount, yarnWeight, needleSize, patternInfo);
    this.projectService.addProject(newProject).then((item) => {
      this.uploadFile(item.key);

    });


    // To do:
    // * Get new project key
    // * call uploadFile, pass in project key :)
  }
}
