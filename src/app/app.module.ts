import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinkItemsComponent } from './components/drinks/drink-items/drink-items.component';
import { DrinkItemComponent } from './components/drinks/drink-item/drink-item.component';
import { HomeComponent } from './pages/home/home.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MainInterceptor} from "./interceptors/main.interceptor";
import {ConfigService} from "./services/config.service";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkItemsComponent,
    DrinkItemComponent,
    HomeComponent,
    DrinkComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    ScrollingModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
