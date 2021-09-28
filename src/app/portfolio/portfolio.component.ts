import { Component, OnInit } from '@angular/core';
import { person } from './mockPerson';
import { Person } from './person'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  person: Person = person;
  darkTheme: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeTheme(): void {
    this.darkTheme = !this.darkTheme;
  }
}
