import React, { useState } from 'react';

const PostCard = ({ title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-xl shadow-md transition-colors duration-200 cursor-pointer ${
        isClicked ? 'bg-blue-100' : 'bg-white'
      }`}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-2 capitalize">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  );
};

export default PostCard;