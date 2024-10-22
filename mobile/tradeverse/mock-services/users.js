import { allSubforums } from "../mock-data/all-subforums";
import { getAllPosts, getPostsByUser } from "./post";
import { allUsers } from "../mock-data/all-users";

export const getAllUsers = () => {
  return allUsers;
};

export const getUserByUsername = (uName='') => {
  if(!uName) return null;
  const user = allUsers.find((user) => user.username == uName);
  return {
    ...user,
    posts: getPostsByUser(uName),
  };
};

export const searchUsers = (searchTerm) => {
  return allUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
