import React, { useState } from "react";

const useLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  //fetch likes from DB on change in isLiked

  //update DB

  const handleLikeButtonClick = () => {
    console.log("button clicked.");
    setIsLiked(!isLiked);
    if (isLiked) setLikesCount((prev) => prev - 1);
    else setLikesCount((prev) => prev + 1);
  };

  return {
    isLiked,
    likesCount,
    handleLikeButtonClick,
  };
};

export default useLikeButton;
