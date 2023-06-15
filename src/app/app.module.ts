import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTwitter, bootstrapDiscord } from '@ng-icons/bootstrap-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { TableComponent } from './components/home/table/table.component'
import { CoinResolver } from './service/coin.resolver';
import { ElegirnosComponent } from './components/home/elegirnos/elegirnos.component';
import { UneteComponent } from './components/home/unete/unete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coins/:id",
    component: CoinsComponent,
    resolve: { resolvedResponse: CoinResolver}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoinsComponent,
    PresentationComponent,
    TableComponent,
    ElegirnosComponent,
    UneteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgIconsModule.withIcons({ bootstrapTwitter, bootstrapDiscord })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
