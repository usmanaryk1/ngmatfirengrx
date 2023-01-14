import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import * as fromGuard from './guards/message.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
   {
    path: 'messages', 
    canActivate:[fromGuard.MessageGuard],//only access if logedIn
    loadComponent: () => import('./messages/messages/messages.component')
      .then(m => m.MessagesComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
