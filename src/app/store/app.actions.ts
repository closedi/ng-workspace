import {createAction, props} from '@ngrx/store';

// export const toggle = createAction('toggle isOpen state');
// export const activate = createAction('start active chat');
export const reset = createAction('return chat to welcome stage');
export const resetMessages = createAction('resetMessages');
export const getUsers = createAction('getUsers', props<{ message }>());
export const push = createAction('push', props<{message}>());
export const pushMessage = createAction('pushMessage', props<{ message }>());
export const pushMessagesOnHold = createAction('pushMessagesOnHold', props<{ users }>());
export const activateChat = createAction('activeChat', props<{chat}>());
export const deactivateChat = createAction('deactiveChat');

