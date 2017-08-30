import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import {ProjectService} from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject: FirebaseObjectObservable<any>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

}
