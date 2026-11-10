import React, { useState, useEffect } from 'react';
import { getPosts } from './Services';
import PostCard from './PostCard';

const Exercise = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Gagal memuat data dari API.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostsData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Post Cards
      </h1>

      {loading && (
        <p className="text-center text-gray-500 font-medium">Memuat data...</p>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise;