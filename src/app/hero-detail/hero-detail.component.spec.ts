import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroServiceInjection } from '../app.injectables';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message/message.service';
import { Directive, Input } from '@angular/core';


const StubHeroService = jasmine.createSpyObj('StubHeroService', ['byId']);
StubHeroService.byId.and.returnValue(Observable);

const StubMessageService = jasmine.createSpyObj('StubMessageService', ['add']);

// tslint:disable-next-line:directive-selector
@Directive({selector: '[routerLink]'})
// tslint:disable-next-line:directive-class-suffix
class StubRouterLink {
    @Input() routerLink;
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent, StubRouterLink ],
      providers: [
        {
          provide: HeroServiceInjection,
          useValue: StubHeroService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: Observable.of({})
          }
        },
        {
          provide: Location,
          useValue: {}
        },
        {
          provide: MessageService,
          useValue: StubMessageService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
