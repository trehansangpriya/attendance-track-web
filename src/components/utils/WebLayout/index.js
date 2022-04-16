import React from 'react'
import Alert from '@/Utils/Alert'
import { useRouter } from 'next/router';
import AppLayout from '@/Utils/AppLayout';

const WebLayout = ({ children }) => {
    const router = useRouter()
    if (router.pathname === '/auth') {
        return (
            <div>
                {children}
                <Alert />
            </div>
        )
    }
    return (
        <AppLayout>
            {children}
            <Alert />
        </AppLayout>
    )
}

export default WebLayout