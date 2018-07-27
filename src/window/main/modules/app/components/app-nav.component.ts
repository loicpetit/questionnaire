import { Component } from '@angular/core';

interface MenuItem {
    title: string;
    icon: string;
    link: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
    items: MenuItem[] = [
        {
            title: 'Test',
            icon: 'T',
            link: '/test'
        }, {
            title: 'Questions',
            icon: 'Q',
            link: '/questions'
        }, {
            title: 'Configuration',
            icon: 'C',
            link: '/config'
        }, {
            title: 'A propos',
            icon: '?',
            link: '/about'
        }
    ];
}
