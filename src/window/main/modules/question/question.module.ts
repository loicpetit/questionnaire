import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { QuestionPagesModule } from './pages/question-pages.module';
import { QuestionRoutingModule } from './routing.module';
// Providers
import { QuestionService } from './question.service';

@NgModule({
  imports: [
    QuestionPagesModule,
    QuestionRoutingModule
  ],
  providers: [
    QuestionService
  ]
})
export class QuestionModule { }
