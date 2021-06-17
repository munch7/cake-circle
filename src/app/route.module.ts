import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CakesComponent } from './welcome/cakes/cakes.component';
import { CupcakesComponent } from './welcome/cupcakes/cupcakes.component';
import { CookiesComponent } from './welcome/cookies/cookies.component';
import { BreadsComponent } from './welcome/breads/breads.component';
import { HealthComponent } from './welcome/health/health.component';
import { OffersComponent } from './welcome/offers/offers.component';
import { UsComponent } from './about us/us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'us', component: UsComponent },
  { path: 'welcome', component: WelcomeComponent, children: [
    { path: 'cakes', component: CakesComponent }, 
    { path: 'cupcakes', component: CupcakesComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'breads', component: BreadsComponent },
    { path: 'health', component: HealthComponent },
    { path: 'offers', component: OffersComponent }
  ]},
  { path: 'table', component: TableComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteModule {}
