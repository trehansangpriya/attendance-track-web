import useWeb from '@/Contexts/WebContext'
import { publicRoute } from '@/Routes/publicRoute'
import Button from '@/Utils/Button'
import Spacer from '@/Utils/Spacer'
import Image from 'next/image'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Auth = () => {
    const { signIn, loading } = useWeb()
    return (
        <div className='flex flex-col md:w-[400px] w-full min-h-screen justify-end md:items-center md:justify-center items-start p-4 pb-[48px]'>
            <Image src={'/assets/images/logo.png'} alt='Attendance Tracker' width='64px' height='64px' />
            <p className="my-4 text-headingxl md:text-center font-heading">
                Attendance Tracker
            </p>
            <Spacer
                height='2rem'
            />
            <p className="my-4 text-headingm font-heading md:text-center">
                Track your daily attendance with ease.
            </p>
            <Button
                title={'Sign In With Google'}
                onClick={signIn}
                disabled={loading}
                icon={<FaGoogle />}
                className='w-full'
            />
        </div>
    )
}

export default publicRoute(Auth)