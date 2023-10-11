import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import PostLoader from "components/PostSkeleton";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const [isLoading, setIsLoading] = useState(true); 

  const getPosts = async () => {
    const response = await fetch("https://talks-backend.vercel.app/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
    setIsLoading(false); // Set loading to false when data is fetched
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `https://talks-backend.vercel.app/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
    setIsLoading(false); // Set loading to false when data is fetched
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {isLoading ? ( // Render the PostLoader while waiting for posts data
        <PostLoader />
      ) : posts.length > 0 ? (
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            postPicture,
            userPicture,
            likes,
            comments,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              postPicture={postPicture}
              userPicture={userPicture}
              likes={likes}
              comments={comments}
            />
          )
        )
      ) : (
        <p>No posts available.</p>
      )}
    </>
  );
};

export default PostsWidget;
