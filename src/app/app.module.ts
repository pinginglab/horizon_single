import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PagesComponent} from './pages/pages.component';
import {AppSettings} from './app.settings';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    // }),
    // PerfectScrollbarModule,
    // CalendarModule.forRoot(),
    // SharedModule,
    // PipesModule,
    routing,
    HttpClientModule,
    // HttpModule,
    // NgxWebstorageModule.forRoot({ prefix: 'pingsec', separator: '-' }),
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    // BlankComponent,
    // SearchComponent,
    // NotFoundComponent,
    // ErrorComponent,
    // TopInfoContentComponent,
    // SidenavComponent,
    // VerticalMenuComponent,
    // HorizontalMenuComponent,
    // FlagsMenuComponent,
    // FullScreenComponent,
    // ApplicationsComponent,
    // MessagesComponent,
    // UserMenuComponent,
    // FavoritesComponent
  ],
  providers: [
    AppSettings,
    // { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    // { provide: OverlayContainer, useClass: CustomOverlayContainer },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    // { provide: HTTP_INTERCEPTORS, useClass: AuthExpiredInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    // { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
