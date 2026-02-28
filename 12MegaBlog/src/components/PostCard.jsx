import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
        

        <div className="w-full mb-4 overflow-hidden rounded-xl relative">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl pointer-events-none"></div>
        </div>


        <h2 className="text-xl font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard