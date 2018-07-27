import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Pages
import { AboutPage } from './pages/about.page';

// Routing
const routes: Routes = [
    { path: 'about', component: AboutPage },
    { path: '', redirectTo: '/config', pathMatch: 'full' },
    { path: '**', component: AboutPage }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
