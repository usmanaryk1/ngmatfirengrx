import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
// material 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MessageGuard } from './guards/message.guard';
//ngrx
import {  StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {  reducers } from './store';
import { SharedReducer } from './store/Shared-spinner/shared.reducer';
import { MessageEffects } from './store/message.effects';
import { LodingSpinnerComponent } from './shared/loding-spinner/loding-spinner.components';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    LodingSpinnerComponent,
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    //firestore
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    //ngrx
    StoreModule.forFeature('messsage',reducers),
    StoreModule.forFeature('shared',SharedReducer),
    StoreModule.forRoot({}, { }),
    EffectsModule.forRoot([MessageEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),

  ],
  
  providers: [
    MessageGuard // load data only once
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
