import React, { useEffect, useState } from 'react';
import { useUserData, navigate } from '../../../utils';
import 'primeicons/primeicons.css';

const Header = () => {
    const { userData } = useUserData();
    // const [theme, setTheme] = useState('light');
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    // useEffect(() => {
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     setTheme('dark');
    // } else {
    //     setTheme('light');
    // }
    // }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    function handleThemeSwitch() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const signOut = () => {
        const lastTheme = theme;

        localStorage.clear();
        window.localStorage.setItem('theme', lastTheme);

        window.location.pathname = '/';
    };

    return (
        <nav className='fixed z-50 flex h-16 w-full items-center justify-between bg-gray-100 px-6 text-gray-700 shadow-md dark:bg-slate-800 dark:text-white'>
            <img
                alt='Logo'
                className='mr-3 h-12 w-12 object-contain'
                onClick={() => navigate('/')}
                src='/assets/react.svg'
            />
            {true && (
                <div>
                    <button
                        className='mx-3 cursor-pointer outline-none'
                        onClick={() => navigate('/explore')}
                    >
                        Explore
                    </button>
                    <button
                        className='mx-3 cursor-pointer outline-none'
                        onClick={() => navigate('/board')}
                    >
                        Task Board
                    </button>
                </div>
            )}
            {true && (
                <div>
                    <button
                        className='mx-3 cursor-pointer outline-none'
                        onClick={() => navigate('/profile')}
                    >
                        Profile
                    </button>
                    <button
                        className='ml-3 cursor-pointer outline-none'
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                    <button
                        className='ml-3 cursor-pointer rounded bg-slate-900 px-2 py-1 text-white outline-none dark:bg-white dark:text-black'
                        onClick={handleThemeSwitch}
                    >
                        {theme !== 'dark' ? (
                            <span className='pi pi-moon items-center justify-center'></span>
                        ) : (
                            <span className='pi pi-sun items-center justify-center'></span>
                        )}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
