import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import { useEffect } from "react";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div
        className="
      text-neutral-600
      text-center
      p-6
      text-xl      
      "
      >
        No Chitter Notifications
      </div>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default NotificationsFeed;
