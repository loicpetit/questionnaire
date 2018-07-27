import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { ConfigPagesModule } from './pages/config-pages.module';
import { ConfigRoutingModule } from './routing.module';


@NgModule({
    imports: [
        ConfigPagesModule,
        ConfigRoutingModule
    ]
})
export class ConfigModule { }
