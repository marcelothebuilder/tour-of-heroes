import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from './hero.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpHeroService implements HeroService {

    constructor(private httpClient: HttpClient) { }

    public all(): Observable<Array<Hero>> {
        return this.httpClient.get<Array<Hero>>('hero');
    }

    public topRanked(quantity: number): Observable<Hero[]> {
        return this.all()
            .map(heroes => heroes.slice(quantity));
    }

    public byId(id: number): Observable<Hero> {
        return this.httpClient.get<Hero>(`hero/${id}`);
    }


}
