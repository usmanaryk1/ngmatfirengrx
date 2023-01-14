import {createFeatureSelector, createSelector, } from '@ngrx/store'
import * as fromMessagesR from './message.reducer'
import { MessagesStateRIndex } from './index';

export const getMessagesStateFeature = createFeatureSelector<MessagesStateRIndex>('messsage');//this see comes from leazy load dashboard.module.ts //hold entire lazy loading module

export const getMessageStateMain= createSelector(getMessagesStateFeature, (state:MessagesStateRIndex)=> state.messages)

export const getMessagesEntities= createSelector(getMessageStateMain, fromMessagesR.getBloagsEntities)
export const getMessagesAll= createSelector(getMessagesEntities, 
    (entities)=>{
        return Object.keys(entities).map(id=> entities[parseInt(id, 10)])
    }
)
export const getMessagesLoaded= createSelector(getMessageStateMain, fromMessagesR.getBloagsLoaded)
export const getMessagesLoading= createSelector(getMessageStateMain, fromMessagesR.getBloagsLoading)