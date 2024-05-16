import React, { useEffect, useState } from "react";
import { createContext } from "react";
import PostModal from "../components/Modals/PostModal";

export const modalsContext = createContext();

export default function ModalsContext({ children }) {
  const [postModal, setPostModal] = useState(false);
  const [post, setPost] = useState(null);
  const openPostModal = ({ post }) => {
    setPostModal(true);
    setPost(post);
  };
  const closePostModal = () => {
    setPostModal(false);
  };
  return (
    <modalsContext.Provider
      value={{ postModal, openPostModal, closePostModal }}
    >
      <PostModal post={post} isOpened={postModal} onClose={closePostModal} />
      {children}
    </modalsContext.Provider>
  );
}
