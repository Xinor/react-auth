import Axios from 'axios';
import { Dispatch } from 'redux';
import { actionSignIn, actionSignOut, actionBrokenToken } from '../actions';

const axios = Axios.create({
  baseURL: '/api/users'
});

export const effectFirstRender = () => async (dispatch: Dispatch<IAction>, getState: () => IState) => {
  const token = getState().token;
  if (token) {
    try {
      const res = await axios.get('/current-user', { headers: { "Authorization": `Bearer ${token}` } });
      const user = res.data as IUser;
      dispatch(actionSignIn(user, token));
    } catch (e) {
      dispatch(actionBrokenToken());
    }
  }
}

export const effectSignUp = (params: ISignUp) => async (dispatch: Dispatch<IAction>) => {
  try {
    const res = await axios.post('/signup', params);
    const user = res.data.user as IUser;
    const token = res.data.token as IToken;
    dispatch(actionSignIn(user, token));
  } catch (e) {
    console.log(e);
  }
}

export const effectSignIn = (params: ISignIn) => async (dispatch: Dispatch<IAction>) => {
  try {
    const res = await axios.post('/signin', params);
    const user = res.data.user as IUser;
    const token = res.data.token as IToken;
    dispatch(actionSignIn(user, token));
  } catch (e) {
    console.log(e);
  }
}

export const effectSignOut = () => (dispatch: Dispatch<IAction>) => {
  dispatch(actionSignOut());
}
