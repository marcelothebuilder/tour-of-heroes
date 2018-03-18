import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './hero.service';

@Injectable()
export class StaticHeroService implements HeroService {

  constructor() { }

  public all(): Array<Hero> {
    return HEROES;
  }

}
