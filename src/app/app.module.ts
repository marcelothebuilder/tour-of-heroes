import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { StaticHeroService } from './hero/static-hero.service';
import { HeroService } from './hero/hero.service';
import { HeroServiceInjection } from './app.injectables';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message/message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HeroServiceInjection,
      useClass: StaticHeroService
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
