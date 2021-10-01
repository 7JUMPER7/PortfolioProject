import { Person } from './person'

export default class SkillsService {
  constructor() {}
  parseSkills(person: Person): string {
    let skills: string[] = person.skills.split(',');
    let str: string = '';
    for (let i in skills) {
      if (+i != skills.length - 1) {
        str += skills[i] + ' | ';
      } else {
        str += skills[i]
      }
    }
    return str;
  }
}
