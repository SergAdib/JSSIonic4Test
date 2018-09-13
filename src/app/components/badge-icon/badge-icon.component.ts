import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-badge-icon',
  templateUrl: './badge-icon.component.html',
  styleUrls: ['./badge-icon.component.css']
})
export class BadgeIconComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('badgeIcon component initialized with component data', this.rendering);
  }
}
