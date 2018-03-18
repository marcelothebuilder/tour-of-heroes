import { Component, OnInit, Inject } from '@angular/core';
import { HeroServiceInjection } from '../app.injectables';
import { Message } from '../message/message';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(@Inject(HeroServiceInjection) private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.topRanked(5)
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }
}
