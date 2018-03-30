import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Input, Directive, DebugElement } from '@angular/core';
import { HeroServiceInjection } from '../app.injectables';
import { MessageService } from '../message/message.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import { By } from '@angular/platform-browser';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[routerLink]' })
// tslint:disable-next-line:directive-class-suffix
class StubRouterLink {
  @Input() routerLink;
}

let HeroServiceStub;

describe('HeroesComponent', () => {
  let fixture: ComponentFixture<HeroesComponent>;

  HeroServiceStub = jasmine.createSpyObj('HeroServiceStub', ['all', 'delete']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, StubRouterLink],
      providers: [
        {
          provide: HeroServiceInjection,
          useValue: HeroServiceStub
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
  });

  it('should create', () => {
    HeroServiceStub.all.and.returnValue(Observable.of([]));
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display a list with one hero', () => {
    HeroServiceStub.all.and.returnValue(Observable.of([
      {
        id: 1
      }
    ]));

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const lis = element.querySelectorAll('li');
    expect(lis.length).toBe(1);
  });

  it('should display a list with two heroes', () => {
    HeroServiceStub.all.and.returnValue(Observable.of([
      {
        id: 1
      },
      {
        id: 2
      }
    ]));

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const lis = element.querySelectorAll('li');
    expect(lis.length).toBe(2);
  });

  it('should display a list with hero paschoal', () => {
    HeroServiceStub.all.and.returnValue(Observable.of([
      {
        id: 1,
        name: 'paschoal'
      }
    ]));

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const span = element.querySelector('.name');
    const spanText = span.textContent;

    expect(spanText).toBe('paschoal');
  });

  it('should display a list item with deletion button', () => {
    HeroServiceStub.all.and.returnValue(Observable.of([
      {
        id: 1,
        name: 'paschoal'
      }
    ]));

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const li = element.querySelector('li');
    const button = li.querySelector('button');
    const buttonText = button.textContent;

    expect(buttonText.toLocaleLowerCase()).toContain('delete');
  });

  it('should delete the hero', () => {
    HeroServiceStub.all.and.returnValues(Observable.of([
      {
        id: 2,
        name: 'paschoal'
      }
    ]),
      Observable.of([])
    );

    HeroServiceStub.delete.and.returnValue(Observable.of(null));

    fixture.detectChanges();

    const element: DebugElement = fixture.debugElement;
    const deletionButton = element.query(By.css('button'));
    deletionButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(HeroServiceStub.delete).toHaveBeenCalledWith(2);

    const li = fixture.nativeElement.querySelectorAll('li');

    expect(li.length).toBe(0);
  });
});
