import { myOffersShort, OfferShortDescription } from './../texts/offer-short';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public offersShortDescription: OfferShortDescription[] = myOffersShort;

  constructor() { }

  ngOnInit() {
  }

}
