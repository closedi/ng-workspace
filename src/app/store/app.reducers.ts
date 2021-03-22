import {createReducer, on} from '@ngrx/store';
import {reset, push, getUsers, activateChat, deactivateChat, pushMessage, pushMessagesOnHold, resetMessages, destroyChat} from './app.actions';

export const usersQueue = [];

const _usersQueueReducer = createReducer(
  usersQueue,
  on(getUsers, (state, {message}) => {
    return message;
  }),

  on(pushMessagesOnHold, (state, {users}) => {
    return [...users];
  }),

  on(destroyChat, (state, {name}) => state.filter(user => user.name !== name)),

  on(reset, state => [])
);

export function usersQueueReducer(state, action): any {
  return _usersQueueReducer(state, action);
}


export const messageQueue = [];

const _messageQueueReducer = createReducer(
  messageQueue,
  on(push, (state, {message}) => {
    if (message instanceof Array) {
      return [...state, ...message];
    } else {
      return [...state, message];
    }
  }),

  on(resetMessages, state => [])
);

export function messageQueueReducer(state, action): any {
  return _messageQueueReducer(state, action);
}



export const activeChat = {};

const _activeChatReducer = createReducer(
  activeChat,
  on(activateChat, (state, {chat}) => {
    return {...chat};
  }),

  on(pushMessage, (state, {message}) => {
    return {...state, messages: message};
  }),

  on(deactivateChat, () => {
   return {};
  }),

  on(destroyChat, () => {
    return {};
  }),
);
export function activeChatReducer(state, action): any {
  return _activeChatReducer(state, action);
}




