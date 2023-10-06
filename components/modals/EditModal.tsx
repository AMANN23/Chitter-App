import { useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();

  return (
    <>
      <div></div>
    </>
  );
};

export default EditModal;
