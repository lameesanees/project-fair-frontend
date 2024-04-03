import React from 'react'
import Swal from 'sweetalert2'
function Profile() {
  const updateUser =()=>{
    Swal.fire({
      title: 'Successful!',
      text: 'Profile Updated Successfully!!',
      icon: 'success',
      confirmButtonText: 'Yes'
    })
  }
  return (
    <div>
      <div className='text-center m-3'>
        <h3 className='mt-5'>My Profile</h3>
        <label>
          <input type="file" style={{ display: 'none' }} />
          <img src="https://static.vecteezy.com/system/resources/thumbnails/021/352/965/small_2x/user-icon-person-profile-avatar-with-plus-symbol-add-user-profile-icon-png.png"
            alt="" className='img-fluid mb-2' style={{ width: "20%" }} />
        </label>
        <input type="text" placeholder='Name' className='form-control mb-2' />
        <input type="text" placeholder='Github' className='form-control mb-2' />
        <input type="text" placeholder='Live Link' className='form-control mb-2' />
        <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>
      </div>
    </div>
  )
}

export default Profile
