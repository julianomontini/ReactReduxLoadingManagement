export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const UPDATE_MESSAGE_REQUEST = 'UPDATE_MESSAGE_REQUEST';
export const UPDATE_MESSAGE_SUCCESS = 'UPDATE_MESSAGE_SUCCESS';

export const fetchMessages = () => {
    return dispatch => {
        dispatch({type: FETCH_MESSAGES_REQUEST})
        setTimeout(() => {
            dispatch({type: FETCH_MESSAGES_SUCCESS, payload: [
                {id: 1, message: 'a'},
                {id: 2, message: 'b'}
            ]})
        }, 500);
    }
}

export const updateMessage = (message) => {
    return dispatch => {
        dispatch({type: UPDATE_MESSAGE_REQUEST, id: message.id});
        setTimeout(() => {
            dispatch({type: UPDATE_MESSAGE_SUCCESS, payload: message})
        }, 500)
    }
}