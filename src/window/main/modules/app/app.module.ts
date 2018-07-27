import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { ConfigPagesModule } from '../config/pages/config-pages.module';
import { AppRoutingModule } from './routing.module';
//  App
import { App } from './app';
//  Components
import { AppNavComponent } from './components/app-nav.component';
//  Pages
import { AboutPage } from './pages/about.page';

@NgModule({
  declarations: [
    App,
    AppNavComponent,
    AboutPage
  ],
  imports: [
    BrowserModule,
    ConfigPagesModule,
    AppRoutingModule
  ],
  bootstrap: [App]
})
export class AppModule { }
