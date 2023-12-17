import {inject, NgModule, OnInit} from '@angular/core';
import {Store, StoreModule} from "@ngrx/store";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CounterControlsComponent} from './counter-controls/counter-controls.component';
import {CounterOutputComponent} from './counter-output/counter-output.component';
import {counterReducer} from "./store/counter.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CounterEffects} from "./store/counter.effects";
import {init} from "./store/counter.actions";

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
