import { Component, Input, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';

@Component({
  selector: 'project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit() { }

}
