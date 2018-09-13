// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular'; //IonicRouteStrategy
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

// @NgModule({
//   declarations: [AppComponent],
//   entryComponents: [],
//   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}


import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MetaModule } from '@ngx-meta/core';
//import { RouteReuseStrategy } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { JssContextService } from './jss-context.service';
import { AppComponentsModule } from './components/app-components.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JssTranslationClientLoaderService } from './i18n/jss-translation-client-loader.service';
import { JssTranslationLoaderService } from './i18n/jss-translation-loader.service';
import { GraphQLModule } from './jss-graphql.module';
//import { SSRHelper } from './app.ssrhelper';


@NgModule({
  imports: [
    //SSRHelper,
    // withServerTransition is needed to enable universal rendering
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserTransferStateModule,
    HttpClientModule,
    GraphQLModule,
    MetaModule.forRoot(),
    IonicModule.forRoot(),
    RoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new JssTranslationClientLoaderService(new JssTranslationLoaderService(http));
        },
        deps: [HttpClient, TransferState]
      }
    }),
    AppComponentsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JssContextService,
    // IMPORTANT: you must set the base href with this token, not a <base> tag in the HTML.
    // the Sitecore Experience Editor will not work correctly when a base tag is used.
    { provide: APP_BASE_HREF, useValue: '/' },
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
