import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { StaticHeroService } from '../hero/static-hero.service';
import { HeroService } from '../hero/hero.service';
import { HeroServiceInjection } from '../app.injectables';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
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

  constructor(@Inject(HeroServiceInjection) private heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit() {
    this.fetchHeroes();
  }

  private fetchHeroes(): any {
    this.heroService.all().subscribe(heroes => this.heroes = heroes);
  }

}
