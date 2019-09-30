import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { FontChangerDirective } from './font-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubUserComponent,
    HomeComponent,
    SearchComponent,
    NotFoundComponent,
    DateCountPipe,
    FontChangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
