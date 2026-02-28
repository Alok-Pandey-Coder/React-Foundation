import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <Container>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create a New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  )
}

export default AddPost