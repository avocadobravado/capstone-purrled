export class Project {
  constructor (
    public userId: string,
    public projectName: string,
    public skill: string,
    public yarnAmount: number,
    public yarnWeight: string,
    public needleSize: number,
    public patternInfo: string,
    public imageURL: string = ""
   ) { }
}
