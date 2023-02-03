import React from 'react';

import ActivityItem from './ActivityItem';

const Index = () => {
    return (
        <div className='mt-5'>
            <span className='font-medium'>Activity</span>
            <div className='mt-3 flex flex-col gap-3'>
                <ActivityItem />
                <ActivityItem />
            </div>
        </div>
    );
};

export default Index;
