import { Component, PLATFORM_ID } from '@angular/core';
//import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    // if (!window || !(window instanceof Window)) {
    //
    //   console.log("PLATFORM ID is a SERVER");
    //
    // } else {
    //   console.log("PLATFORM ID is NOT a SERVER");
    // }

    if (isPlatformServer(PLATFORM_ID)) {

      console.log("PLATFORM ID is a SERVER");

    } else {

      console.log("PLATFORM ID is NOT a SERVER");

    }

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
