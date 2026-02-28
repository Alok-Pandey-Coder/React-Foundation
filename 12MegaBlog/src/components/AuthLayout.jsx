import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components'

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login')
    } else if (!authentication && authStatus !== authentication) {
      navigate('/')
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 animate-pulse">
              Loading...
            </h1>
          </div>
        </Container>
      </div>
    )
  }

  return <>{children}</>
}