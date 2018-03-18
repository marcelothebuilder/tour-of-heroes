import { Component, OnInit, Input, Inject } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HeroService } from '../hero/hero.service';
import { HeroServiceInjection } from '../app.injectables';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private route: ActivatedRoute,
    private location: Location,
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
    .subscribe((hero) => this.hero = hero);
  }
}
