import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-small-footer',
  templateUrl: './small-footer.component.html',
  styleUrls: ['./small-footer.component.css']
})
export class SmallFooterComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('smallFooter component initialized with component data', this.rendering);
  }
}
