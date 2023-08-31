import {
  decrementLike,
  getLikesCount,
  incrementLike,
} from "@/utils/APIRequests";
import { useEffect, useState } from "react";

const useLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  //fetch likes from DB on change in isLiked
  useEffect(() => {
    //localstorage has key -> setIsLiked(true)
    (async () => {
      const data = await getLikesCount();
      if (data && data.status === 200) setLikesCount(data.likesCount);
      //also update localstorage
    })();
  }, [isLiked]);

  //update DB

  const handleLikeButtonClick = async () => {
    console.log("button clicked.");
    setIsLiked(!isLiked);
    //if (isLiked) setLikesCount((prev) => prev - 1);
    // else setLikesCount((prev) => prev + 1);
    try {
      if (isLiked) {
        setLikesCount((prev) => prev - 1);
        const data = await decrementLike();
        if (data && data.status === 200) {
          console.log("decrement success");
          setLikesCount(data.likesCount);
        }
      } else {
        setLikesCount((prev) => prev + 1);
        const data = await incrementLike();
        if (data && data.status === 200) {
          console.log("increment success");
          setLikesCount(data.likesCount);
        }
      }
    } catch (err) {
      //roll back
      if (isLiked) setLikesCount((prev) => prev + 1);
      else setLikesCount((prev) => prev - 1);
    }
  };

  return {
    isLiked,
    likesCount,
    handleLikeButtonClick,
  };
};

export default useLikeButton;
