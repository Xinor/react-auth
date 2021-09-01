import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './containers/Header';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import { effectFirstRender } from '../redux/effects';

export default function App() {

  const token = useSelector((state: IState): IToken => state.token);
  const user = useSelector((state: IState): IUser => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectFirstRender());
  }, []);

  if (!user.id && token) return <div>Loading</div>;

  return (
    <div>
      <Header user={user} />
      {
        user.id ? (
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/auth/signup' exact>
              <SignUp />
            </Route>
            <Route path='/auth/signin' exact>
              <SignIn />
            </Route>
            <Redirect to="/auth/signup" />
          </Switch>
        )
      }
    </div>
  )
}
