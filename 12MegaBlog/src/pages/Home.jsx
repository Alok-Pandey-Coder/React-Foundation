import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents)
    })
  }, [])

  // Empty state
  if (posts.length === 0) {
    return (
      <div className="w-full py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <Container>
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-gray-700 transition-colors duration-300 hover:text-gray-900">
              Login to read posts
            </h1>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-12 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home