import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  // components, directives , pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  // modules
  imports: [
    BrowserModule
  ],
  // Services/ Injectables
  providers: [],
  // components to bootstrap/load
  bootstrap: [AppComponent]
})
export class AppModule { }
