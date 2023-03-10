import React, { useState } from 'react';
import { Card } from 'primereact/card';

import TaskDetails from './TaskDetails';

const Index = ({ task }) => {
    const [openTaskModal, setOpenTaskModal] = useState(false);
    return (
        <>
            <Card
                className='cursor-pointer dark:bg-slate-700 dark:text-white'
                onClick={() => setOpenTaskModal(true)}
            >
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <img
                            src='https://api.lorem.space/image/fashion?w=150&h=150'
                            className='mr-10 w-20 rounded-lg object-contain'
                        />
                        <div>
                            <p className='text-lg font-medium'>Task Name</p>
                            <span className='text-sm'>
                                {'2 days ago'} ago by {'user'}
                            </span>
                        </div>
                    </div>
                    <div className='rounded-lg bg-[#1d1e26] px-3 py-1 text-center text-sm text-white dark:bg-white dark:text-black'>
                        $10 / hour
                    </div>
                </div>
            </Card>
            <TaskDetails
                modalOpen={openTaskModal}
                openModalHandler={() => setOpenTaskModal(false)}
            />
        </>
    );
};

export default Index;
