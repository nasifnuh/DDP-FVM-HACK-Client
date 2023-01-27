import React from 'react';

export default function List({ children, name }) {
    return (
        <div className='flex h-fit w-fit flex-col gap-2 rounded border border-slate-500 bg-[#1D1E26] py-2'>
            <div className='w-full border-b border-slate-500'>
                <h2 className='py-2 px-2 text-base'>{name}</h2>
            </div>
            
            {children}
        </div>
    );
}
