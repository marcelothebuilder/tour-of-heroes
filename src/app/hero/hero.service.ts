import { Hero } from '../model/hero';
import { Observable } from 'rxjs/Observable';

export interface HeroService {
    all(): Observable<Array<Hero>>;
}
