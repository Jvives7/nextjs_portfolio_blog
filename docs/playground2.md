```javascript
'use client';

import { ChangeEvent, FC, useState } from 'react'
import { HiLockClosed } from 'react-icons/hi'

interface loginProps { }

function Login() {

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setInput((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
            />
          </svg>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>Sign in to your account</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              start your 15 day trial
            </a>
          </p>
        </div>


        <form className='mt-8 space-y-6'>
          <input type='hidden' name='remember' defaultValue='true' />
          
          <div className='-space-y-px rounded-md shadow-sm'>
            <p className='pb-1 text-sm text-red-600'> {error && 'Invalid login credentials'}</p>



            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                value={input.email}
                onChange={handleChange}
                autoComplete='email'
                required
                className='relative block w-full appearance-none rounded-none rounded-t-md border'
                placeholder='Email address'
              />
            </div>


            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='password'
                name='password'
                type='password'
                value={input.password}
                onChange={handleChange}
                autoComplete='current-password'
                required
                className='relative block w-full appearance-none'
                placeholder='Password'
              />
            </div>
          </div>



          <div className='flex items-center justify-between'>



            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 hover:text-indigo-500'
              />
              <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900 '>
                Remember me
              </label>
            </div>



            <div className='text-sm'>
              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </a>
              </div>
            </div>



            <div>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  Login(input)
                }}
                className='group relative flex w-full justify-center rounded-md border border-transparent'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <HiLockClosed
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>



        </form>



      </div>
    </div>
  )

  export default Login
  ```