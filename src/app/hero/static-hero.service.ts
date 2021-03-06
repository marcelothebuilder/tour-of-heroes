import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './hero.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class StaticHeroService implements HeroService {

  constructor() { }

  public all(): Observable<Array<Hero>> {
    return Observable
        .of(HEROES)
        .delay(5000 * Math.random());
  }

  public topRanked(quantity: number): Observable<Hero[]> {
    return this.all()
      .map(heroes => heroes.slice(quantity));
  }

  public byId(id: number): Observable<Hero> {
    return this.all()
      .map(heroes => {
        return heroes.find(hero => hero.id === id);
      });
  }

  public delete(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }


}
