import { registerReducers } from '../modules/auth/register/state/reducers';
import { loginReducers } from '../modules/auth/login/state/reducer';

export const reducers = { ...registerReducers, ...loginReducers };
