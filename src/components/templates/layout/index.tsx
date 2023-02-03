import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div>
            <div className='relative min-h-screen w-full dark:bg-slate-900 dark:text-white'>
                <Header />
                <div className='children'>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
