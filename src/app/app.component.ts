import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as fromSharedStore from './store/Shared-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'message';
  showLoading$!: Observable<boolean>;
  constructor(private store: Store) {
    //loading-spinner
    this.showLoading$ = this.store.select(fromSharedStore.getLoading);
  }
}
