import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CakesComponent } from './welcome/cakes/cakes.component';
import { CupcakesComponent } from './welcome/cupcakes/cupcakes.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, children: [
    { path: 'cakes', component: CakesComponent }, 
    { path: 'cupcakes', component: CupcakesComponent }
  ]  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteModule {}
