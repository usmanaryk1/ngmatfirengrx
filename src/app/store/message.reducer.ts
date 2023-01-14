import * as fromMessagesA from './message.actions'
import { Messages } from './message.model';
export interface MessageStateR {
    entities:{[id:number]:Messages},
    loaded:boolean;
    loading:boolean;
}
export const initialState:MessageStateR = {
    entities:{},
    loaded: false, 
    loading: false
}

export function reducer(
    state :MessageStateR=initialState, 
    action:fromMessagesA.MessagesAction 
):MessageStateR {
    switch(action.type){
        //first case
        case fromMessagesA.LOAD_MessageS: {
            //return brand newobject
            return{
                ...state, 
                loading:true,    
            };
        }

        //2nd case
        case fromMessagesA.LOAD_MessageS_SUCCESS: {
            // console.log("reducer action.payload",action.payload);
            // const data= action.payload; // [{id:1},{id:2}] //change array into entities down
            const messages = action.payload;
            // const entities = messages.reduce((entities:{[id:number] : Messages}, messages:Messages)=>{
            //     console.log('reducer entities', entities, messages );
                 
            //     return{
            //         ...entities,
            //         [messages.id]:messages
            //     };
            // },{
            //     ...state.entities,
            // })
            const entities = action.payload;
            //return brand newobject
            return{
                ...state, //merge all the initial states
                loading:false,
                loaded:true,
                entities
            };
        }

        //3rd case
        case fromMessagesA.LOAD_MessageS_FAIL: {
            //return brand newobject
            return{
                ...state, //merge all the initial states
                loading:false, //fail to load anythings
                loaded:false //fail to load anythings
            };
        }

        default:
        return state;
    }

}
export const getBloagsLoading = (state:MessageStateR) => state.loading;
export const getBloagsLoaded = (state:MessageStateR) => state.loaded;
export const getBloagsEntities = (state:MessageStateR) => state.entities;
