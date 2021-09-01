import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { effectSignIn } from "../../redux/effects";
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignIn() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [form, setForm] = useState<ISignIn>({ email: '', password: '' });

    const changeHandler: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitHandler: React.FormEventHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(effectSignIn(form));
    }

    const goToSignUp: React.MouseEventHandler = () => {
        history.replace("/auth/signup");
    }

    return (
        <div className='flex-1 flex justify-center items-center m-40'>
            <form className="inline-flex flex-col bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
                <Input label='email' onChange={changeHandler} />
                <Input label='password' type='password' onChange={changeHandler} />
                <Button title='submit' type='submit' onClick={submitHandler} />
                <Button title='Sign Up?' onClick={goToSignUp} className='mt-4 w-28 mx-auto' />
            </form>
        </div>
    )
}
