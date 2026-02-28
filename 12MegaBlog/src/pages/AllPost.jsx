import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts().then((res) => {
      if (res) setPosts(res.documents)
    })
  }, [])

  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          All Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export default AllPost