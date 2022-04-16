import React from 'react';
import { useRouter } from 'next/router';
import useWeb from '@/Contexts/WebContext';
import Loading from '@/Utils/Loading';

export function privateRoute(Component) {
    return function PrivateRoute(props) {
        const context = useWeb()
        const router = useRouter()
        if (!context.user) {
            router.push('/auth')
            return <Loading modal={true} />
        }
        return (
            <Component context={context} {...props} />
        )
    }
}