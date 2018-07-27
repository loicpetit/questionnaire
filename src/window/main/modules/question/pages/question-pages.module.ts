import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pages
import { QuestionsPage } from './questions.page';


@NgModule({
  declarations: [
    QuestionsPage
  ],
  exports: [
    QuestionsPage
  ]
})
export class QuestionPagesModule { }
