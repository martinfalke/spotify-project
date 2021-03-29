// redux/utils.js

// ActionHelpers
const asyncTypes = {
    // the three states of a promise
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
};

const syncTypes = {
    // the three states of any non-promisable action
    STARTED: 'STARTED',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR'
};


/* creates an action type each for the provided action with
* appended '_{STATUS}' to the access key, for example:
*   We want to create an async action for logging in, we call createAsyncTypes
*   with the argument 'LOGIN', the returned object will then contain three
*   properties with the keys 'PENDING', 'SUCCESS', and 'ERROR' corresponding to
*   the values 'LOGIN_PENDING', 'LOGIN_SUCCESS', and 'LOGIN_ERROR' respectively.
*   This way we can perform operations on each status for the login action and
*   abstractly access the three statuses of a promise action in our functions that call API's.
*/
export const createAsyncTypes = typeString => {
    Object.values(asyncTypes).reduce((acc, curr) => {
        acc[curr] = `${typeString}_${curr}`;
        return acc;
    }, {});
};

export const createSyncTypes = typeString => {
    Object.values(syncTypes).reduce((acc, curr) => {
        acc[curr] = `${typeString}_${curr}`;
        return acc;
    }, {});
};

export const createAction =
    (type, payload = {}) => ({type, ...payload});

// create reducer given its handlers and default/initial state
export const createReducer = (initialState, handlers) => {
    // the reducer takes an action and the current state to update the state with the action
    (state = initialState, action) => {
        // there is a handler for the action type, call it
        if(handlers.hasOwnProperty(action.type))
            return handlers[action.type](state, action);
        // there is no handler for the action type, leave state unchanged
        else
            return state;
    }
}