import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {init} from "./store/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Udemy-NgRx';

  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
