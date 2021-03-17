import {createReducer, on} from '@ngrx/store';
import {toggle, reset, activate} from './app.actions';

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
