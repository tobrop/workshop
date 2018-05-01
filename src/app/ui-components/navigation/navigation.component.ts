import { Component, OnInit } from '@angular/core';
import { navigationLinks, NaivgationLink } from './navigation-links';

@Component({
  selector: 'tor-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigationLinks: NaivgationLink[] = navigationLinks;

  constructor() { }
}
