import { TestBed, inject } from '@angular/core/testing';

import { StaticHeroService } from './static-hero.service';

describe('StaticHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticHeroService]
    });
  });

  it('should be created', inject([StaticHeroService], (service: StaticHeroService) => {
    expect(service).toBeTruthy();
  }));
});
