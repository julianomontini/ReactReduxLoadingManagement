import _ from 'lodash'

// api/loadingReducer.js
export const loadingReducer = (state = {}, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
    
    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state;  
    
    const [, requestName, requestState] = matches;
    let id;
    if(action.id)
        id = action.id
    else if(action.payload && _.isObject(action.payload))
        id = action.payload.id
    else id = null;
        
    return {
      ...state,
      // Store whether a request is happening at the moment or not
      // e.g. will be true when receiving GET_TODOS_REQUEST
      //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
      [requestName]: {
          loading: (requestState === 'REQUEST'), 
          id},
    };
};