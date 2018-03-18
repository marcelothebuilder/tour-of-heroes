import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './hero.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StaticHeroService implements HeroService {

  constructor() { }

  public all(): Observable<Array<Hero>> {
    return Observable
        .of(HEROES)
        .delay(5000 * Math.random());
  }

}
