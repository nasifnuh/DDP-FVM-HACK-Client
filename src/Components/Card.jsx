import React from 'react';

export default function Card({ name, category, reward }) {
    return (
        <div className='mx-2 w-[16rem] rounded border border-slate-500 bg-[#2A2C37] text-base text-white'>
            <div className='p-3'>
                <p>{name}</p>
                <div>{category}</div>
            </div>
            <div className='flex justify-between rounded-b bg-[#303340] px-3 py-1'>
                <p className='text-sm'>{reward}</p>
                <p className='cursor-pointer text-sm'>Submit Work</p>
            </div>
        </div>
    );
}
