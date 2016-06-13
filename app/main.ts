import { OpaqueToken, provide, Inject } from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent, stateFn, Action} from './app.component';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

// -- DI config
// const initState = new OpaqueToken("initState");
// const dispatcher = new OpaqueToken("dispatcher");
// const state = new OpaqueToken("state");

// const stateAndDispatcher = [
//   provide(initState, {useValue: {todos: [], visibilityFilter: 'SHOW_ALL'}}),
//   provide(dispatcher, {useValue: new Subject<Action>(null)}),
//   provide(state, {useFactory: stateFn, deps: [new Inject(initState), new Inject(dispatcher)]})
// ];

bootstrap(AppComponent);
