import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../services/project.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService, ProfileService]
})

export class ProjectDetailComponent implements OnInit {
    projectName;
    profileName = "Bob";
    projectToDisplay;

    constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
    private profileService: ProfileService
  ) {}

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.projectName = urlParameters['id'];
    });
      this.projectToDisplay = this.projectService.getProjectByName(this.projectName);

    // this.projectToDisplay.subscribe( result =>
    // this.profileName = this.profileService.getProfileByUid(result.userId)
    // );
  }

}
