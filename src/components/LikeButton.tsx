import React, { MouseEventHandler } from "react";
import EmptyHeart from "./Icons/EmptyHeart";
import FilledHeart from "./Icons/FilledHeart";

const LikeButton: React.FC<{
  liked: boolean;
  likesCount: number;
  onLike: (e: any) => void;
}> = ({ liked, likesCount, onLike }) => {
  return (
    <div className="flex gap-2 items-center justify-center p-1">
      {!liked ? (
        <span
          className="animate-pulse cursor-pointer select-none"
          onClick={onLike}
        >
          <EmptyHeart />
        </span>
      ) : (
        <span
          className="cursor-pointer select-none animate-bounce"
          onClick={onLike}
        >
          <FilledHeart />
        </span>
      )}
      <h6
        className={`italic text-white font-medium ${
          liked ? "animate-[pulse_2s_ease-in_forwards]" : ""
        }`}
      >
        {likesCount}
      </h6>
    </div>
  );
};

export default LikeButton;
