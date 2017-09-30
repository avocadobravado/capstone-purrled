import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
  profileId;
  profileToDisplay;
  projects;
  favorites;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileId = urlParameters['id'];
    });
    this.profileToDisplay =
      this.profileService.getProfileById(this.profileId);

    this.projects =
      this.projectService.getProjectsByUserId(this.profileId);

    // this.profileToDisplay.map( (profile) => {
    //   console.log(profile);
    //   for( let favorite in profile.favorites ) {
    //     this.projectService.getProjectByUid( favorite ).map(
    //       (project) => { this.favorites.push(project); }
    //     );
    //   }
    //   console.log( this.favorites);
    // });

    // this.profileToDisplay.subscribe(profile => {
    //   for(let favorite of profile.favorites) {
    //     console.log('hello? ' + favorite.$key);
    //     this.favorites.push(this.projectService.getProjectByUid(favorite.$key));
    //     // console.log(this.favorites);
    //   }
    // });
  }
  //End of ngOnInit

  goToDetailPage(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };

}
