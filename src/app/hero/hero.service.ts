import { Hero } from '../model/hero';
import { Observable } from 'rxjs/Observable';

export interface HeroService {
    all(): Observable<Array<Hero>>;
    topRanked(quantity: number): Observable<Array<Hero>>;
    byId(id: number): Observable<Hero>;
}
