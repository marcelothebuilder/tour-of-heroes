import { Component, OnInit, Input, Inject } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { HeroService } from '../hero/hero.service';
import { HeroServiceInjection } from '../app.injectables';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/never';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService,
    @Inject(HeroServiceInjection) private heroService: HeroService) { }

  ngOnInit() {
    this.fetchHeroDetails();
  }

  public goBack() {
    this.location.back();
  }

  private fetchHeroDetails() {
    this.route.paramMap.switchMap((paramMap: ParamMap) => {
      const id: number = parseInt(paramMap.get('id'), 10);
      return this.heroService.byId(id);
    })
    // using both pipeable operator (tap) and catch
    .do(hero => this.messageService.add(`Fetched ${hero.name} information`))
    .catch((error, obs) => {
      this.messageService.add('Failed to fetch hero details');
      return Observable.never<Hero>();
    })
    .subscribe((hero) => this.hero = hero);
  }
}
