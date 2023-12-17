import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject, Injectable} from "@angular/core";
import {decrement, increment, init, set} from "./counter.actions";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCount} from "./count.selector";

@Injectable()
export class CounterEffects {

  private actions$ = inject(Actions);
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem("count");
        console.log('?????')
        console.log(storedCounter)
        if (storedCounter) {
          return of(set({value: +storedCounter}));
        }

        return of(set({value: 0}));
      })
    ));
  private store: Store<{ counter: number }> = inject(Store);
  saveCount = createEffect(() => this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem("count", counter.toString());
      })
    ),
    {dispatch: false}
  );
}
