import { APP_ROUTING } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas 
import {APP_ROUTING} from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, HeroesComponent],
  imports: [ BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
