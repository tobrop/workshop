import { OfferShortDescription } from './../../texts/offer-short';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tor-i-offer-tile',
  templateUrl: './i-offer-tile.component.html',
  styleUrls: ['./i-offer-tile.component.scss']
})
export class IOfferTileComponent implements OnInit {

  @Input()
  offerShortDescription: OfferShortDescription = undefined;

  constructor() { }

  ngOnInit() {
  }

}
