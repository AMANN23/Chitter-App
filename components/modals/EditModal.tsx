import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [
    currentUser?.name,
    currentUser?.username,
    currentUser?.bio,
    currentUser?.profileImage,
    currentUser?.coverImag,
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
    } catch (error) {
      toast.error("something went wrong");
    }
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default EditModal;
