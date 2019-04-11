import React, { useState } from 'react';

const LikeDislikeButton = () => {
  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(25);

  const clickLikeButton = () => {
    setLikeCount(likeCount + 1);
  }

  const clickDislikeButton = () => {
    setDislikeCount(dislikeCount + 1);
  }

  return (
    <div className="mt-1">
      <button className="btn btn-success mr-1" onClick={clickLikeButton}>Like | {likeCount}</button>
      <button className="btn btn-danger" onClick={clickDislikeButton}>Dislike | {dislikeCount}</button>
    </div>
  )
}

export default LikeDislikeButton;