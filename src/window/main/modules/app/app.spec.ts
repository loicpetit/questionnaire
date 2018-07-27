import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { App } from './app';

//  Stub
@Component({selector: 'app-nav', template: ''})
class AppNavStubComponent {}
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {}

//  Tests
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App, AppNavStubComponent, RouterOutletStubComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render the navigation', async(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-nav')).toBeDefined();
  }));
});
