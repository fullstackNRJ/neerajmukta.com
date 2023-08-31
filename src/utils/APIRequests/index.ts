import { ADD_LIKE, ADD_UNLIKE, GET_LIKES_COUNT } from "../constants";

export const GET = async (url: string) => {
  try {
    const response = await (await fetch(url)).json();
    return response;
  } catch (err) {
    console.error("Oops! Failed to get likes", err);
  }
};

export const getLikesCount = () => GET(GET_LIKES_COUNT);
export const incrementLike = () => GET(ADD_LIKE);
export const decrementLike = () => GET(ADD_UNLIKE);
