export class Profile {
  constructor (
    public name: string,
    public photoURL: string,
    public bio: string,
    public favorites: string[],
    public friends: string[]
  ) { }
}
