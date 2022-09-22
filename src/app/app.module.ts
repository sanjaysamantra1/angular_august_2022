import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginModule } from './login/login.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { NumberonlyDirective } from './customdirectives/numberonly.directive';
import { HighlightDirective } from './customdirectives/highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { RemainingPipe } from './remaining.pipe';
import { MySortPipe } from './my-sort.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  // components, directives , pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    EmployeesComponent,
    NumberonlyDirective,
    HighlightDirective,
    PipesComponent,
    RemainingPipe,
    MySortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmpComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  // Services/ Injectables
  providers: [],
  // components to bootstrap/load
  bootstrap: [AppComponent],
})
export class AppModule {}
