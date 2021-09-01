const initialState = { id: null, email: null } as IUser;

export default function userReducer(state: IUser = initialState, action: IAction): IUser {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload.user;
    case 'SIGN_OUT':
      return initialState;
    default: return state;
  }
}
