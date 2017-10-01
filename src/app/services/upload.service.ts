import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import { ProjectImage } from '../models/projectImage.model';
import * as firebase from 'firebase';

// Logic of Upload functionality from Wes Doyle:
// https://youtu.be/KkVeg0jjsc8

@Injectable()
export class UploadService {
  private basePath = '/uploads';
  private uploads: FirebaseListObservable<ProjectImage>;

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(upload: Upload) : Promise<string> {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.$key}`)
      .put(upload.file);

    return new Promise( function(resolve, reject) {
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        // three observers
        // 1. state_changed observers
        (snapshot) => {
          //upload in progress
          upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          console.log("Upload progress " + upload.progress);
        },
        // 2. error observer
        (error) => {
          // upload failed
          reject(error);
        },
        // 3. success
        (): any => {
          resolve(uploadTask.snapshot.downloadURL);
        }
      );
    });
  }

  getImageURL(projectKey: string) {
    return firebase.storage().ref(this.basePath)
      .child(projectKey).getDownloadURL();
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log("File saved! " + upload.url);
  }

}
