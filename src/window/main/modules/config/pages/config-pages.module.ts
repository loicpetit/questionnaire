import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { ConfigRoutingModule } from './routing.module';
// Pages
import { ConfigPage } from './config.page';


@NgModule({
  declarations: [
    ConfigPage
  ],
  exports: [
    ConfigPage
  ],
  imports: [
    ConfigRoutingModule
  ]
})
export class ConfigPagesModule { }
