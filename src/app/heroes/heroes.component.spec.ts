import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Input, Directive } from '@angular/core';
import { HeroServiceInjection } from '../app.injectables';
import { MessageService } from '../message/message.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[routerLink]' })
// tslint:disable-next-line:directive-class-suffix
class StubRouterLink {
  @Input() routerLink;
}


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, StubRouterLink],
      providers: [
        {
          provide: HeroServiceInjection,
          useValue: {
            all: () => Observable.of([])
          }
        },
        {
          provide: MessageService,
          useValue: {
            add: () => null
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
