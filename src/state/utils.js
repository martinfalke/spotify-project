// redux/utils.js

export const createAction =
    (type, payload = {}) => ({type, ...payload});

// create reducer given its handlers and default/initial state
export const createReducer = (initialState, handlers) =>
    // the reducer takes an action and the current state to update the state with the action
    (state = initialState, action) => {
        // there is a handler for the action type, call it
        if(handlers.hasOwnProperty(action.type))
            return handlers[action.type](state, action);
        // there is no handler for the action type, leave state unchanged
        else
            return state;
    }


export const createExpirationDate = (secondsUntilExpiration) => {
    return new Date(Date.now() + secondsUntilExpiration*1000);
}

export const isDateExpired = (expirationDate) => (expirationDate.getTime() < Date.now());

export const isDateExpiredIn = (expirationDate, remainingSeconds) => (expirationDate.getTime()+remainingSeconds*1000 < Date.now());