export default function tokenReducer(state: IToken = null, action: IAction): IToken {
    switch(action.type) {
        case 'SIGN_IN':
            return action.payload.token;
        case 'SIGN_OUT':
            return null;
        case 'BROKEN_TOKEN':
            return null;
        default: return state;
    }
}
