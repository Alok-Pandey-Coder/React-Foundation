import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login( userData ))
        else dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) return null

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50">

      <Header />

      <main className="flex-grow w-full">
        <Outlet />
      </main>


      <Footer />
    </div>
  )
}

export default App