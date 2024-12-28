import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function PostItem({
  author,
  text,
  imageUrl,
  profilePicture,
  tags,
}) {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="post-author">
        <img src={profilePicture} alt={author} className="post-author__image" />
        <p className="post-author__name">{author}</p>
      </div>
      <div className="post-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="post-content">
        {isLiked ? (
          <FaHeart
            className="post-like post-like__active"
            onClick={toggleLike}
          />
        ) : (
          <FaRegHeart className="post-like" onClick={toggleLike} />
        )}

        <p className="post-text">
          <span>{author}</span>
          {text}
        </p>
        {tags.map((tag) => (
          <span className="post-tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
