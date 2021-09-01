import React from 'react';

interface Props {
    label: string;
    className?: string;
    type?: string;
    onChange: React.ChangeEventHandler;
}

const Input = ({ label, className = '', type = 'text', onChange }: Props) => {

    return (
        <div className={className}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
                <input onChange={onChange} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 my-3 leading-tight focus:outline-none focus:shadow-outline" type={type} />
            </label>
        </div>
    )
}

export default Input;