import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, switchMap, take, catchError } from 'rxjs/operators';
import * as fromStoreSel from '../store/message.selectors';
import * as fromStore from '../store/message.actions';
import { setLoadingSpinner } from '../store/Shared-spinner/shared.actions';

@Injectable()
export class MessageGuard implements CanActivate {
  constructor(private store: Store) {}
  //pre loading
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)), //return observable true
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStoreSel.getMessagesLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(setLoadingSpinner({ status: true }));
          // if not loaded already then load
          this.store.dispatch(new fromStore.loadMessages());
        }
      }),
      filter((loaded) => loaded), //true return
      take(1)
    );
  }
}
