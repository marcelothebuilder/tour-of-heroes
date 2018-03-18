import { InjectionToken } from '@angular/core';
import { HeroService } from './hero/hero.service';

export const HeroServiceInjection = new InjectionToken<HeroService>('HeroService');
