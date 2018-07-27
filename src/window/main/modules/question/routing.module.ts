import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Pages
import { QuestionsPage } from './pages/questions.page';

// Routing
const routes: Routes = [
    { path: 'questions', component: QuestionsPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuestionRoutingModule { }
