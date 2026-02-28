import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-12 bg-gray-50">
      <Container>

        <div className="w-full relative mb-6 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />


          {isAuthor && (
            <div className="absolute right-6 top-6 flex">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-400 hover:bg-green-500"
                  className="mr-3 text-white"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-400 hover:bg-red-500"
                className="text-white"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>


        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="prose prose-lg max-w-none text-gray-800">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <Container>
        <div className="text-center text-gray-700 text-xl font-semibold">
          Loading post...
        </div>
      </Container>
    </div>
  );
}