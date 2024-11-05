import React from 'react'

const Header = (props) => {
  console.log(props.firstName);
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '' );
    // window.location.reload();
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
       <h1 className='text-3xl font-medium '>Hello <span className='text-3xl font-semibold text-yellow-500'>{props.data?.firstName || props.firstName}👋</span></h1>
       <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg'>Logout</button>
    </div>
  )
}

export default Header
