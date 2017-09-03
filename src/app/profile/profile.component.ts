import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { Profile } from '../profile.model';
import { Project } from '../project.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProjectService]
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
  }

}
