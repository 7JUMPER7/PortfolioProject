import { Person } from './person'

export default class ExperienceService {
  constructor() {}
  parseExperience(person: Person): string {
    if (person.experience <= 2) {
      return 'Junior';
    } else if (person.experience > 2 && person.experience <= 4) {
      return 'Middle';
    } else {
      return 'Senior';
    }
  }
}
