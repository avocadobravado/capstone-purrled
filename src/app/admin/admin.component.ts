import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, skill: string, yarnAmount: number, yarnWeight: string,  needleSize: number, patternInfo: string) {
    var newProject: Project = new Project(name, skill, yarnAmount, yarnWeight, needleSize, patternInfo);
    this.projectService.addProject(newProject);
  }

}
