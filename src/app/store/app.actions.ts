import {createAction, props} from '@ngrx/store';

// export const toggle = createAction('toggle isOpen state');
// export const activate = createAction('start active chat');
export const reset = createAction('return chat to welcome stage');
export const getUsers = createAction('getUsers', props<{ message }>());
export const push = createAction('push', props<{message}>());
export const activateChat = createAction('activeChat', props<{chat, time}>());
export const deactivateChat = createAction('deactiveChat');

