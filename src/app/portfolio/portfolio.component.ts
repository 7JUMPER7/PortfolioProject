import { Component, OnInit } from '@angular/core';
import ExperienceService from '../experience.service';
import { person } from '../mockPerson';
import { Person } from '../person'
import SkillsService from '../skills.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [SkillsService, ExperienceService]
})
export class PortfolioComponent implements OnInit {
  person: Person = person;
  darkTheme: boolean = true;
  constructor(private skillService: SkillsService, private experienceService: ExperienceService) { }

  ngOnInit() {
  }

  changeTheme(): void {
    this.darkTheme = !this.darkTheme;
  }
  getSkills(): string {
    return this.skillService.parseSkills(person);
  }
  getExperience(): string {
    return this.experienceService.parseExperience(person);
  }
}
