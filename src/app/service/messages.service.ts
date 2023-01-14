import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Message } from '../store/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private db: AngularFirestore) { }
  post(data: any[]) {
    return this.db.collection("messages").add({
      ...data,
      createdAt: serverTimestamp(),
    }) 
  }
  //ngrx
  getMessage$(): Observable<any[]> {
    return this.db.collection<any>("messages", ref=> ref.orderBy('createdAt', 'desc')).snapshotChanges().pipe(
      map((actions) => actions.map((action) => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      })));
  }

  


}
