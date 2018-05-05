import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tor-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  path: string;

  @Input()
  style = 'fill';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo() {
    this.router.navigate([this.path]);
  }
}
