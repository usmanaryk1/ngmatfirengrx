//import actions
import { Action } from "@ngrx/store";
import { Messages } from "./message.model";



//Constants => Load Messages
export const LOAD_MessageS='[Message] Load Messages'; // User Action
export const LOAD_MessageS_FAIL='[Message API] Load Messages Fail'; // Backend Action => from server
export const LOAD_MessageS_SUCCESS='[Message API] Load Messages Success'; // Backend Action => from server



//Actions Creaters => Events
export class loadMessages implements Action {
    readonly type = LOAD_MessageS;
}

export class loadMessagesFail implements Action {
    readonly type = LOAD_MessageS_FAIL;//type should be string
    //payload could be any
    constructor(public payload:any){} 
}

export class loadMessagesSuccess implements Action {
    readonly type = LOAD_MessageS_SUCCESS;
    constructor(public payload:Messages[]){}
}


//Action types
export type MessagesAction = loadMessages | loadMessagesFail |loadMessagesSuccess



