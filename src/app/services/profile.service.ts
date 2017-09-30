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

  getProfileById(profileId: string){
     return this.database.object('profiles/' + profileId);
   }

  addProfile(uid: string, name: string, photoURL: string) {
    // As per David East's answer here (https://github.com/angular/angularfire2/issues/636#issuecomment-256195254)
    // we can set the Profile's $key to the user UID. That will make life easier later on.
    const profile = this.database.object(`/profiles/`+uid);
    profile.set(new Profile(name, photoURL, '', []));
  }

  getProfileByUid(profileUid: string) : Promise<Profile>{
    // Wrap the ListObservable as a Promise, it's easier to deal with 😎
    return new Promise((resolve, reject) => {
      this.database.list('/profiles', {
        query: {
          orderByChild: 'uid',
          equalTo: profileUid,
          limitToFirst: 1
        }
      }).subscribe( profiles => {
        if (profiles !== undefined && profiles.length > 0)
        {
          resolve(profiles[0]);
        }
        else reject (new Error('No profile found for UID of ' + profileUid));
      })
    });
  }


}
