import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('topBanner component initialized with component data', this.rendering);
  }
}
