import React from 'react'
import { Signup as SignupComponent } from '../components'

function Signup() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <SignupComponent />
      </div>
    </div>
  )
}

export default Signup