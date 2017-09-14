import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ProjectService, AuthenticationService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  submitForm(user: string, projectName: string, skill: string, yarnAmount: number, yarnWeight: string, needleSize: number, patternInfo: string) {
    var newProject: Project = new Project(user, projectName, skill, yarnAmount, yarnWeight, needleSize, patternInfo);
    this.projectService.addProject(newProject);
  }

}
