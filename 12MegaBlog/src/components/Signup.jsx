import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError('')
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
        const user = await authService.getCurrentUser()
        if (user) dispatch(login(user))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl p-10 shadow-lg border border-gray-200">

        <div className="mb-4 flex justify-center">
          <Logo width="100px" height="100px" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 leading-tight">
          Sign up to create account
        </h2>


        <p className="mt-2 text-center text-gray-600 text-sm">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-purple-500 hover:underline transition-colors duration-200"
          >
            Sign In
          </Link>
        </p>


        {error && (
          <p className="text-red-600 mt-6 text-center font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register('name', { required: true })}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be valid',
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup