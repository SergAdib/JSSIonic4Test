import { Component, PLATFORM_ID } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { fakeGlobals } from "./fakeWindow";
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

    if (isPlatformServer(PLATFORM_ID)) {

      console.log("PLATFORM ID is a SERVER");
      //window = fakeGlobals.win;
      window = new Window();
    }

    // if (isPlatformServer(PLATFORM_ID)) {
    //   window = fakeGlobals.win;
    //   console.log("PLATFORM ID is a SERVER");
    // } else {
    //   window = window;
    // }

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
