import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Question } from './question.model';

const QUESTIONS: Question[] = [];

@Injectable()
export class QuestionService {
    public getAll(): Promise<Question[]> {
        return of(QUESTIONS).toPromise();
    }
}
