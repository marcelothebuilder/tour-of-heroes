import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Directive, Input, Injectable, InjectionToken } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { HeroServiceInjection } from '../app.injectables';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[routerLink]'})
class StubRouterLinkDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: any;
}

const StubHeroService = jasmine.createSpyObj('StubHeroService', ['topRanked']);
StubHeroService.topRanked.and.returnValue(Observable.of([]));

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, StubRouterLinkDirective ],
      providers: [{
        provide: HeroServiceInjection,
        useValue: StubHeroService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have a list of heroes', () => {
    expect(component.heroes).toBeDefined();
    expect(component.heroes).toEqual([]);
  });
});
