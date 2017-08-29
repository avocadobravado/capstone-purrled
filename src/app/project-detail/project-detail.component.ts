import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
    projectName: string;
    projectToDisplay;

    constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) {}

    ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectName = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectByName(this.projectName);
    // this.projectToDisplay = this.projectService.getProjectByName(this.projectName);
  }

}
