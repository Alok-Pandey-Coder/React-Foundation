import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button className='px-6 py-2
        rounded-full
        font-semibold text-white
        bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400
        hover:shadow-xl
        active:scale-95'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn