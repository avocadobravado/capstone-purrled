import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles')
  }

  getProfiles(){
    return this.profiles;
  }

  addProfile(newProfile: Profile) {
   this.profiles.push(newProfile);
 }

 // Nice to have
 // getProfileByUID(profileName: string){
 //    return this.database.object('profiles/' + profileName);
 //  }

 //  updateProfile(localUpdatedProfile){
 //   var projectEntryInFirebase = this.getProfileByUID(localUpdatedProject.$key);
 //   projectEntryInFirebase.update({
 //   name: localUpdatedProject.name,
 //   skill: localUpdatedProject.skill,
 //   yarnAmount: localUpdatedProject.yarnAmount,
 //   yarnWeight: localUpdatedProject.yarnWeight,
 //   needleSize: localUpdatedProject.needleSize,
 //   patternInfo: localUpdatedProject.patternInfo,
 //   });
 // }
 //
 // deleteProject(localProjectToDelete){
 //    var projectEntryInFirebase = this.getProjectByName(localProjectToDelete.$key);
 //    projectEntryInFirebase.remove();
 //  }
}
