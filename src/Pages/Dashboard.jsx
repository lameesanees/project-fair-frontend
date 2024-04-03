import React from 'react'
import Profile from '../Components/Profile';
import MyProject from '../Components/MyProject';
function Dashboard() {
  return (
    <>
      <div className='row'>
        <h2 className='text-center mt-3'>Welcome <span className='text-warning'>User</span></h2>
        <div className='col-lg-6'>
          <MyProject />
        </div>
        <div className='col-lg-6'>
          <Profile />
        </div>
      </div>
    </>
  )
}

export default Dashboard