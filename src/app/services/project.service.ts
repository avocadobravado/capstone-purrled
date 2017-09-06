import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects')
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
   this.projects.push(newProject);
 }

 getProjectByName(projectName: string){
    return this.database.object('projects/' + projectName);
  }

  updateProject(localUpdatedProject){
   var projectEntryInFirebase = this.getProjectByName(localUpdatedProject.$key);
   projectEntryInFirebase.update({
   name: localUpdatedProject.name,
   skill: localUpdatedProject.skill,
   yarnAmount: localUpdatedProject.yarnAmount,
   yarnWeight: localUpdatedProject.yarnWeight,
   needleSize: localUpdatedProject.needleSize,
   patternInfo: localUpdatedProject.patternInfo,
   });
 }

 deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectByName(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
