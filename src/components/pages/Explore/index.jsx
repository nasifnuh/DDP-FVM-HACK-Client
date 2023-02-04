import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import Card from '../../pages/Explore/Card';
import Layout from '../../templates/layout';
import TextField from '../../templates/textField';
import { useUserData } from '../../../utils';

import '../../../App.css';

const Index = () => {
    const { userData } = useUserData();

    const [openNameModal, setOpenNameModal] = useState(false);
    const [openCreatedModal, setOpenCreatedModal] = useState(false);
    const [name, setName] = useState('');

    console.log(localStorage.getItem('theme'));
    return (
        <Layout>
            <div className='m-auto w-full lg:w-3/5 xl:w-1/2 '>
                <div className='my-3 flex items-center justify-between'>
                    <div className='text-3xl font-medium'>Open Tasks</div>
                    {!userData && (
                        <Button
                            className='p-button-help'
                            label='Connect Wallet'
                            onClick={() => setOpenNameModal(true)}
                        />
                    )}
                </div>
                <div className='flex flex-col gap-5'>
                    <Card />
                </div>
            </div>
            <Dialog
                draggable={false}
                header='You go as...'
                onHide={() => setOpenNameModal(false)}
                style={{ width: '25vw' }}
                visible={openNameModal}
                className='mydialog'
            >
                <TextField
                    containerClassNames='w-full mb-5 dark:text-white'
                    onChangeHandler={(e) => setName(e.target.value)}
                    title='Name'
                    value={name}
                />
                <Button
                    className='p-button-info w-full'
                    label='Continue'
                    onClick={() => {
                        setOpenCreatedModal(true);
                        setOpenNameModal(false);
                    }}
                />
            </Dialog>
            <Dialog
                draggable={false}
                header='Login'
                onHide={() => setOpenCreatedModal(false)}
                style={{ width: '25vw' }}
                visible={openCreatedModal}
            >
                <div className='mb-5 text-center'>
                    Account created successfully 👏👏
                </div>
                <Button
                    className='p-button-info w-full'
                    label='Profile'
                    onClick={() => setOpenCreatedModal(false)}
                />
            </Dialog>
        </Layout>
    );
};

export default Index;
