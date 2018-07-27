import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pages
import { ConfigPage } from './config.page';


@NgModule({
  declarations: [
    ConfigPage
  ],
  exports: [
    ConfigPage
  ]
})
export class ConfigPagesModule { }
