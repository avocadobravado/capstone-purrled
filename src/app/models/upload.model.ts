export class Upload {
  $key: string;
  file: File;
  url: string;
  progress: number;

  constructor(file: File, projectKey: string){
    this.file = file;
    this.$key = projectKey;
  }
}
