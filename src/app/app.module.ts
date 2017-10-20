import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SnippetsPage } from '../pages/snippets/snippets';
import { AddSnippetPage } from '../pages/add-snippet/add-snippet';
import { EditSnippetPage } from '../pages/edit-snippet/edit-snippet';
import { HttpModule } from '@angular/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

const routes: Routes = [
    { path: 'information/:id', component: EditSnippetPage}
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SnippetsPage,
    AddSnippetPage,
    EditSnippetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(routes, {enableTracing: true }),
    HttpModule,
  ],
  exports: [RouterModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SnippetsPage,
    AddSnippetPage,
    EditSnippetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
