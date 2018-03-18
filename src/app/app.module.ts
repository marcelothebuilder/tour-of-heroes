import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { StaticHeroService } from './hero/static-hero.service';
import { HttpHeroService } from './hero/http-hero.service';
import { HeroService } from './hero/hero.service';
import { HeroServiceInjection } from './app.injectables';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-ds';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      apiBase: '/'
    })
  ],
  providers: [
    {
      provide: HeroServiceInjection,
      useClass: HttpHeroService
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
