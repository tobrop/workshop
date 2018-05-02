import { FlexLayoutModule } from '@angular/flex-layout';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { IOfferTileComponent } from './home/i-offer-tile/i-offer-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IOfferTileComponent
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
