import React from 'react';

interface Props {
    title: string;
    type?: 'button' | 'reset' | 'submit' | undefined;
    className?: string;
    onClick: React.MouseEventHandler;
}

const Button = ({ title, type = 'button', className = '', onClick }: Props) => {
    return (
        <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`} type={type}>
            {title}
        </button>
    )
}

export default Button;