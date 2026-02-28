import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((res) => {
        if (res) setPost(res)
        else navigate('/')
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  if (!post) return null

  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Edit Post
          </h1>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  )
}

export default EditPost