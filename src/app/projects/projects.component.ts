import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})

export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };
}
