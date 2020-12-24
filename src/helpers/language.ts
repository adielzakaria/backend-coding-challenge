export class Language {
  repositories: Array<string>;
  numberOfRepositories: number;
  accumulatedStars: number;
  constructor() {
    this.repositories = new Array<string>();
    this.accumulatedStars = 0;
  }

  addRepository(repository: string) {
    this.repositories.push(repository);
    this.numberOfRepositories = this.repositories.length;
  }
  getNumberOfRepositories(): number {
    return this.repositories.length;
  }
  getRepositories() {
    return this.repositories;
  }
  addStars(stars: number) {
    this.accumulatedStars += stars;
  }
  getAccumulatedStars() {
    return this.accumulatedStars;
  }
}
