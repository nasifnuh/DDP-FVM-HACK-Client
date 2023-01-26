import React from 'react';

export default function Card({ name, category, reward }) {
    return (
        <div className='mx-auto w-1/2 rounded bg-slate-200 text-xl text-black'>
            <div className='p-3'>
                <p>{name}</p>
                <div>{category}</div>
            </div>
            <div className='flex justify-between rounded-b bg-slate-500 px-3 py-1'>
                <p className='text-sm'>{reward}</p>
                <p className='cursor-pointer text-sm text-white'>Submit Work</p>
            </div>
        </div>
    );
}
