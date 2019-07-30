import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './profile/login/login.component';
import { SignupComponent } from './profile/signup/signup.component';
import { VideoComponent } from './head/video/video.component';
import { RouteModule } from './route.module';
import { DropdownDirective } from './dropdown.directive';
import { TableComponent } from './head/table/table.component';
import { ContactsComponent } from './head/contacts/contacts.components';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './profile/edit/edit.component';
import { FootComponent } from './foot/foot.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    WelcomeComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    VideoComponent,
    DropdownDirective,
    TableComponent,
    ContactsComponent,
    HomeComponent,
    EditComponent,
    FootComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
