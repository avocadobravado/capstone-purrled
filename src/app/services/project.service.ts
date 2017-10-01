import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/filter';

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
   return this.projects.push(newProject);
  }

 getProjectByUid(key: string){
    return this.database.object('projects/' + key);
 }

 getProjectsByUserId(id: string) {
   return this.database.list('/projects', {
       query: {
         orderByChild: 'userId',
         equalTo: id
       }
    });
  }

// getProjectByKey(projectIds) {
//   console.log(projectIds);
  // var results = [];
  // for (let id of projectIds) {
  //   results.push(this.database.object(`/projects/` + id.$key));
  // }
  // return results;

  // return this.projects.filter(x => projectIds.indexOf(x));
// }

  updateImageURL(key: string, imageURL: string)
  {
    const project = this.getProjectByUid(key);
    project.update({ imageURL: imageURL });
  }

  updateProject(localUpdatedProject){
   var projectEntryInFirebase = this.getProjectByUid(localUpdatedProject.$key);
   projectEntryInFirebase.update({
     name: localUpdatedProject.name,
     skill: localUpdatedProject.skill,
     yarnAmount: localUpdatedProject.yarnAmount,
     yarnWeight: localUpdatedProject.yarnWeight,
     needleSize: localUpdatedProject.needleSize,
     patternInfo: localUpdatedProject.patternInfo
   });
 }

 deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectByUid(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
