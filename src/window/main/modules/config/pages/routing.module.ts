import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Pages
import { ConfigPage } from './config.page';

// Routing
const routes: Routes = [
    { path: 'config', component: ConfigPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ConfigRoutingModule { }
