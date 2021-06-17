import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route.module';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { OrderComponent } from './order/order.component';
import { CakesComponent } from './welcome/cakes/cakes.component';
import { CupcakesComponent } from './welcome/cupcakes/cupcakes.component';
import { CookiesComponent } from './welcome/cookies/cookies.component';
import { OffersComponent } from './welcome/offers/offers.component';
import { HealthComponent } from './welcome/health/health.component';
import { BreadsComponent } from './welcome/breads/breads.component';
import { UsComponent } from './about us/us.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CakesComponent,
    TableComponent,
    CupcakesComponent,
    CookiesComponent,
    OffersComponent,
    HealthComponent,
    BreadsComponent,
    HomeComponent,
    FootComponent,
    OrderComponent,
    UsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
