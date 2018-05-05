import { Component, OnInit } from '@angular/core';
import { navigationLinks, NaivgationLink } from '../../shared/navigation-links';
import { Router } from '@angular/router';

@Component({
  selector: 'tor-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navigationLinks: NaivgationLink[] = navigationLinks;

  constructor(private router: Router) {
    this.navigationLinks = navigationLinks.filter(link => !(link.path === 'vision'));
  }

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
