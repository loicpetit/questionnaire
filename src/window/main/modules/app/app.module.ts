import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { QuestionModule } from '../question/question.module';
import { ConfigModule } from '../config/config.module';
import { AppRoutingModule } from './routing.module';
// Services
import { QuestionService } from '../question/question.service';
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
    QuestionModule,
    ConfigModule,
    AppRoutingModule
  ],
  bootstrap: [App]
})
export class AppModule { }
