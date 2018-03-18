import { Hero } from '../model/hero';

export interface HeroService {
    all(): Array<Hero>;
}
