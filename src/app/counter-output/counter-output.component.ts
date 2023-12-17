import {Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCount, selectDoubleCount} from "../store/count.selector";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {

  count$: Observable<number>;
  doubleCount$: Observable<number>;

  private store = inject(Store);

  constructor() {
    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDoubleCount)
  }
}
