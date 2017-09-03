export class Profile {
  constructor (
    public uid: string,
    public bio: string,
    public favorites: string[],
    public friends: string[]
  ) { }
}
