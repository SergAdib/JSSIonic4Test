import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('banner component initialized with component data', this.rendering);
  }
}
