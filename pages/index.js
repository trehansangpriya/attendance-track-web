import useWeb from '@/Contexts/WebContext'
import Button from '@/Utils/Button'
import React from 'react'

const Home = () => {
  const { user, logOut } = useWeb()
  return (
    <div className='flex w-full flex-col'>
      Hello {user?.displayName}
      <Button
        title={'LogOut'}
        onClick={logOut}
        className='bg-error-500'
      />
    </div>
  )
}

export default Home