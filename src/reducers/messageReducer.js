import _ from 'lodash';

import { UPDATE_MESSAGE_SUCCESS, FETCH_MESSAGES_SUCCESS } from '../actions'
export const messageReducer = (state = {}, action) => {

    switch(action.type){
        case FETCH_MESSAGES_SUCCESS:
            return _.mapKeys(action.payload, msg => msg.id)
        case UPDATE_MESSAGE_SUCCESS:
            return { ...state, [action.payload.id]: action.payload}
        default:
            return state
    }

}