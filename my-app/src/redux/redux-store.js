
import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage : usersReducer,
    auth : authReducer
}); 

let store = createStore(reducers);

export default store;