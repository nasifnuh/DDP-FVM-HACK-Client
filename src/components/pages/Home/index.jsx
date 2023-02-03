import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import Layout from '../../templates/layout';
import TextField from '../../templates/textField';
import { navigate } from '../../../utils';

const Index = () => {
    const [openNameModal, setOpenNameModal] = useState(false);
    const [openCreatedModal, setOpenCreatedModal] = useState(false);
    const [name, setName] = useState('');
    return (
        <Layout>
            <div className='flex w-full flex-col items-center justify-center'>
                <span className='mb-10 text-3xl font-medium'>
                    Welcome to DDP - Decentralized Development Protocol 👋
                </span>
                <div className='flex gap-10'>
                    <Button
                        label='Explore tasks...'
                        onClick={() => navigate('/explore')}
                    />
                    <Button
                        className='p-button-help'
                        label='Connect Wallet'
                        onClick={() => setOpenNameModal(true)}
                    />
                </div>
            </div>
            <Dialog
                draggable={false}
                header='You go as...'
                onHide={() => setOpenNameModal(false)}
                style={{ width: '25vw' }}
                visible={openNameModal}
            >
                <TextField
                    containerClassNames='w-full mb-5'
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
