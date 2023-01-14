import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import * as fromActions from './message.actions';
import * as fromSelector from './message.selectors';
import * as fromReducer from './index';
import { MessagesService } from '../service/messages.service';
import {
  setLoadingSpinnerFail,
  setLoadingSpinnerSuccess,
} from './Shared-spinner/shared.actions';
@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private _messagesService: MessagesService,
    private store: Store
  ) {}

  loadMessagesService$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.LOAD_MessageS),
      mergeMap((user) => {
        return this._messagesService.getMessage$().pipe(
          // delay(5000),
          map((user) => {
            //hide loding-spinner if load data successfully
            this.store.dispatch(setLoadingSpinnerSuccess({ status: false }));
            return new fromActions.loadMessagesSuccess(user);
          }),
          catchError((error) => {
            //hide loding-spinner if load data fail
            this.store.dispatch(setLoadingSpinnerFail({ status: false }));
            return of(new fromActions.loadMessagesFail(error));
          })
        );
      })
    );
  });
}
