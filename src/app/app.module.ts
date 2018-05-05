import { FlexLayoutModule } from '@angular/flex-layout';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { IOfferTileComponent } from './home/i-offer-tile/i-offer-tile.component';
import { AboutShortComponent } from './home/about-short/about-short.component';
import { TimeTableComponent } from './home/time-table/time-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IOfferTileComponent,
    AboutShortComponent,
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    UiComponentsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
