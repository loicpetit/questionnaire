import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../../../../node_modules/rxjs';

import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
    selector: 'questions-page',
    templateUrl: './questions.page.html',
    styleUrls: ['./questions.page.scss']
})
export class QuestionsPage implements OnInit {

    questions: Question[];

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions(): Promise<Question[]> {
        return this.questionService.getAll().then(questions => {
            this.questions = questions;
            return questions;
        });
    }

}
