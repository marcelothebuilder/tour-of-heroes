import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero/hero.service';
import { HeroServiceInjection } from '../app.injectables';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero: Hero;

  constructor(@Inject(HeroServiceInjection) private heroService: HeroService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.fetchHeroes();
  }

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  public isSelected(hero: Hero) {
    if (!this.isAnyHeroSelected()) {
      return false;
    }

    return this.selectedHero.id === hero.id;
  }

  public delete($event, hero: Hero) {
    $event.stopPropagation();
    this.messageService.add(`Deleting hero #${hero.id} ${hero.name}`);
    this.heroService.delete(hero.id)
      .subscribe(() => {
        this.fetchHeroes();
      });
  }

  public isAnyHeroSelected(): boolean {
    return this.selectedHero !== undefined;
  }

  private fetchHeroes(): any {
    this.heroService.all()
      .subscribe(heroes => this.handleHeroesFetchedSuccessfully(heroes));
  }

  private handleHeroesFetchedSuccessfully(heroes: Hero[]): any {
    this.heroes = heroes;
    this.messageService.add(`${heroes.length} heroes fetched!`);
  }

}
