import useCurrentUser from "./useCurrentUser";
import usePost from "./usePost";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutuateFetchedPost } = usePost(postId);
};
