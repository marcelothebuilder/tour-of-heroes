import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = HEROES;
  public selectedHero: Hero;

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  public isSelected(hero: Hero) {
    if (!this.isAnyHeroSelected()) {
      return false;
    }

    return this.selectedHero.id === hero.id;
  }

  public isAnyHeroSelected(): boolean {
    return this.selectedHero !== undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
