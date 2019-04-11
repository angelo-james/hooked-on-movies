import React, { useState } from 'react';

const LikeDislikeButton = () => {
  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(25);

  const buttonClick = (event) => {
    event.target.value === 'like' ? setLikeCount(likeCount + 1) : setDislikeCount(dislikeCount + 1);
  }

  return (
    <div className="mt-1">
      <button value='like' className="btn btn-success mr-1" onClick={buttonClick}>Like | {likeCount}</button>
      <button value='dislike' className="btn btn-danger" onClick={buttonClick}>Dislike | {dislikeCount}</button>
    </div>
  )
}

export default LikeDislikeButton;