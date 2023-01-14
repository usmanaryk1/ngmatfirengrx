
import { ActionReducerMap, MetaReducer } from '@ngrx/store'//for type check purpose
import * as fromMessagesR from './message.reducer' //import reducer function
export interface MessagesStateRIndex {
    messages : fromMessagesR.MessageStateR,
}
export const reducers:ActionReducerMap<MessagesStateRIndex,any> = { 
    messages: fromMessagesR.reducer, 
}

