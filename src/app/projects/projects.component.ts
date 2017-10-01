import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { UploadService } from '../services/upload.service';
import { FirebaseListObservable } from 'angularfire2/database';
import 'firebase/storage';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService, UploadService]
})

export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  image: any;

  constructor(private router: Router, private projectService: ProjectService, public uploadService: UploadService) {}

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };

}
