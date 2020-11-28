/* eslint-disable prettier/prettier */
export class Language {
    repositories: Array < string >
    numberOfRepositories: number
    constructor() {

        this.repositories = new Array < string > ()

    }

    addRepository(repository: string) {

        this.repositories.push(repository)
        this.numberOfRepositories = this.repositories.length
    }
    getNumberOfRepositories(): number {
        return this.repositories.length
    }
    getRepositories() {
        return this.repositories
    }
}