import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { effectSignOut } from '../../redux/effects';

interface Props {
    user: IUser
}

const Header = ({ user }: Props) => {

    const dispatch = useDispatch();
    const userExist = Boolean(user.id);
    const signOutHandler = useCallback(() => {
        dispatch(effectSignOut());
    }, []);

    return (
        <div className='h-16 bg-gray-100 text-black flex items-center px-10'>
            <NavLink exact to="/" className='menu-item text-3xl' replace={userExist}>Mustang</NavLink>
            {
                userExist ? (
                    <button className='btn menu-item ml-auto' onClick={signOutHandler}>exit</button>
                ) : (
                    <>
                        <NavLink className='menu-item ml-auto mr-10' exact to="/auth/signup" replace>Sign Up</NavLink>
                        <NavLink className='menu-item' exact to="/auth/signin" replace>Sign In</NavLink>
                    </>
                )
            }
        </div>
    )
}

export default Header;
