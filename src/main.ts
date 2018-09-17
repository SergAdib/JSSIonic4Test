import { enableProdMode, Injectable, NgZone } from "@angular/core";
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

//import { Injectable,NgZone } from ‘@angular/core’;
//import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";

//import {platformBrowser} from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { fakeGlobals } from "./app/fakeWindow";

// if (!window) {
//   (<any>window) = <any>window ? window : fakeGlobals.win;
// }
// if (!document) {
//   (<any>document) = <any>document ? document : fakeGlobals.doc;
// }

function _window(): any {
  // return the global native browser window object
  return window;
}
@Injectable()
export class CordovaService {
  private resume: BehaviorSubject<boolean>;
  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    Observable.fromEvent(document, "resume").subscribe(event => {
      this.zone.run(() => {
        this.onResume();
      });
    });
  }

  get cordova(): any {
    return _window().cordova;
  }
  get onCordova(): Boolean {
    return !!_window().cordova;
  }
  public onResume(): void {
    this.resume.next(true);
  }
}

if (environment.production) {
  enableProdMode();
}

let onDeviceReady = () => {
  //platformBrowserDynamic().bootstrapModule(AppModule)
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
};
document.addEventListener("deviceready", onDeviceReady, false);

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
