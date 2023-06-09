import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CoinsComponent } from './pages/coins/coins.component';

import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTwitter, bootstrapDiscord } from '@ng-icons/bootstrap-icons'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coins",
    component: CoinsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgIconsModule.withIcons({ bootstrapTwitter, bootstrapDiscord })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
