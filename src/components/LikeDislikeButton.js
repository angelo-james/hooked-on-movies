import React, { useState } from 'react';

const LikeDislikeButton = () => {
  const [likeCount, setLikeCount] = useState('');
  const [dislikeCount, setDislikeCount] = useState([]);

  const clickLikeButton = () => {
    setLikeCount(+likeCount + 1);
  }

  const clickDislikeButton = () => {
    setDislikeCount(+dislikeCount + 1);
  }

  return (
    <div>
      <button onClick={clickLikeButton}>Like | {likeCount === '' ? (<span>100</span>) : 100 + likeCount}</button>
      <button onClick={clickDislikeButton}>Dislike | {dislikeCount === '' ? (<span>25</span>) : 25 + dislikeCount}</button>
    </div>
  )
}

export default LikeDislikeButton;