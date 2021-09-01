export const actionSignIn = (user: IUser, token: IToken): IAction => ({
    type: 'SIGN_IN',
    payload: { user, token }
});

export const actionSignOut = (): IAction => ({
    type: 'SIGN_OUT',
    payload: null
});

export const actionBrokenToken = (): IAction => ({
    type: 'BROKEN_TOKEN',
    payload: null
});
