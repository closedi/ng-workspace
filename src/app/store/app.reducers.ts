import {createReducer, on} from '@ngrx/store';
import {reset, push, getUsers, activateChat, deactivateChat} from './app.actions';

// export const isOpen = false;

// const _isOpenReducer = createReducer(
//   isOpen,
//   on(toggle, state => !state),
//   on(reset, state => isOpen)
// );
//
// export function isOpenReducer(state, action): any {
//   return _isOpenReducer(state, action);
// }

export const usersQueue = [];

const _usersQueueReducer = createReducer(
  usersQueue,
  on(getUsers, (state, {message}) => {
    return message;
  }),

  on(reset, state => [])
);

export function usersQueueReducer(state, action): any {
  return _usersQueueReducer(state, action);
}


export const messageQueue = [];

const _messageQueueReducer = createReducer(
  messageQueue,
  on(push, (state, {message}) => {
    // return [...state, message].sort(((a, b) => a.time - b.time));
    return [...state, message];
  }),

  on(reset, state => [])
);

export function messageQueueReducer(state, action): any {
  return _messageQueueReducer(state, action);
}



export const activeChat = {};

const _activeChatReducer = createReducer(
  activeChat,
  on(activateChat, (state, {chat, time}) => {
    return {...chat, time};
  }),
  on(deactivateChat, state => {
   return {};
  }),
);
export function activeChatReducer(state, action): any {
  return _activeChatReducer(state, action);
}




