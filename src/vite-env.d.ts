/// <reference types="vite/client" />

interface IUser {
    id: string | null;
    email: string | null;
}

type IToken = string | null;

interface IState {
    user: IUser;
    token: IToken;
}

interface IAction {
    type: string;
    payload: any;
}

interface ISignUp {
    email: string;
    password: string;
}

interface ISignIn {
    email: string;
    password: string;
}