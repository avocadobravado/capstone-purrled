import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Profile } from '../models/profile.model';
import { AngularFireModule} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class ProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles')
  }

  getProfiles(){
    return this.profiles;
  }

  addProfile(uid: string, name: string, photoURL: string) {
   this.profiles.push(new Profile(uid, name, photoURL, '', [],[]));
  }

  getProfileByUid(profileUid: string){
    return this.database.list('/profiles', {
      query: {
        orderByChild: 'uid',
        equalTo: profileUid,
        limitToFirst: 1
      }
    });
  }

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
