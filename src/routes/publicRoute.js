import React from 'react';
import { useRouter } from 'next/router';
import Loading from '@/Utils/Loading';
import useWeb from '@/Contexts/WebContext';


export function publicRoute(Component) {
    return function PublicRoute(props) {
        const context = useWeb()
        const router = useRouter()
        if (context.user) {
            router.push('/')
            return <Loading modal={true} />
        }
        return <Component context={context} {...props} />
    }
}
