import React from 'react'
import { Link } from 'react-router-dom'
function Auth({ register }) {
  return (
    <>
      <div>
        <div className='row'>
          <div className='col-lg-6'>
            <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
              width={'70%'} className='p-4 mt-5' style={{ marginLeft: "20px" }} alt="" />
          </div>

          <div className='col-lg-6'>
            <form className='shadow bg-tertiary' style={{ marginRight: "30px" }}>
              <h1 className='text-center mt-5'>
                PROJECT FAIR
              </h1>
              <h5 className='text-center'>
                {
                  register ? 'Register Here' :
                    'Login Here'
                }
              </h5>

              <div className='p-5'>
                {
                  register &&
                  <input type="text" placeholder='Username'
                    className='form-control mb-2' />
                }
                <input type="email" placeholder='Email'
                  className='form-control mb-2' />
                <input type="password" placeholder='Password'
                  className='form-control mb-2' />
              </div>
              <div>
                {
                  register ?
                    <div className='text-center'>
                      <button className='btn mb-5'>
                        Register
                      </button>
                      <p>
                        Already Registered?
                        <Link to ={'/login'}>Login Here</Link>
                      </p>
                    </div>
                    :
                    <div className='text-center'>
                      <button className='btn mb-5'>
                        Login
                      </button>
                      <p>New to Here?
                        <Link to = {'/register'}>Register
                        </Link>
                      </p>
                    </div>
              }
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Auth
