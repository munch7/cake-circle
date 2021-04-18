import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route.module';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { OrderComponent } from './order/order.component';
import { CakesComponent } from './welcome/cakes/cakes.component';
import { CupcakesComponent } from './welcome/cupcakes/cupcakes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    WelcomeComponent,
    CakesComponent,
    TableComponent,
    CupcakesComponent,
    HomeComponent,
    FootComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
