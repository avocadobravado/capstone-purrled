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
    // Project specific
    projectName;
    projectToDisplay;
    isFavorited: boolean;

    // Profile name
    profile;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private projectService: ProjectService,
      private profileService: ProfileService
    ) {
      if (Math.random() < .5) {
        this.isFavorited = true;
      }
      else {
        this.isFavorited = false;
      }
    }

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.projectName = urlParameters['id'];
      });
      this.projectToDisplay = this.projectService.getProjectByUid(this.projectName);

      this.projectToDisplay.subscribe( result => {
        this.profileService.getProfileByUid(result.userId).
          then( profile => {
            this.profile = profile;
          });
        });
  }
  toggleFavorited() {
    this.isFavorited = !this.isFavorited;
  }
}
