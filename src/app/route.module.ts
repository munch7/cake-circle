import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "src/app/profile/login/login.component";
import { SignupComponent } from './profile/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TableComponent } from './head/table/table.component';
import { ContactsComponent } from './head/contacts/contacts.components';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './profile/edit/edit.component';

const routes: Routes = [
  {
    path: 'profile', 
    component: ProfileComponent 
  },
  {
    path: 'profile/login', 
    component: LoginComponent 
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteModule {}
