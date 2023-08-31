import {
  decrementLike,
  getLikesCount,
  incrementLike,
} from "@/utils/APIRequests";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useLikeButton = () => {
  const [isLiked, setIsLiked] = useLocalStorage("has-liked", false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getLikesCount();
      if (data && data.status === 200) setLikesCount(parseInt(data.likesCount));
      //also update localstorage
    })();
    console.log("likes count:", likesCount);
  }, [isLiked, likesCount]);

  //update DB

  const handleLikeButtonClick = async () => {
    console.log("button clicked.");
    setIsLiked(!isLiked);
    //if (isLiked) setLikesCount((prev) => prev - 1);
    // else setLikesCount((prev) => prev + 1);
    try {
      if (isLiked) {
        // setLikesCount((prev) => prev - 1);
        const data = await decrementLike();
        if (data && data.status === 200) {
          console.log("decrement success");
          setLikesCount(parseInt(data.likesCount));
        }
      } else {
        // setLikesCount((prev) => prev + 1);
        const data = await incrementLike();
        if (data && data.status === 200) {
          console.log("increment success");
          setLikesCount(parseInt(data.likesCount));
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
