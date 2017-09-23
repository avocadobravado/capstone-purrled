import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../services/project.service';
import { ProfileService } from '../services/profile.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProjectService, ProfileService]
})

export class ProfileComponent implements OnInit {
  // Profile specific
  profileName;
  profileToDisplay;
  projects;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileName = urlParameters['id'];
    });
    this.profileToDisplay =
      this.projectService.getProjectByName(this.profileName);
  }

}
