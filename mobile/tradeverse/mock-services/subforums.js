import { allSubforums } from "../mock-data/all-subforums";
export const searchSubforums = (searchTerm) => {
  if (!searchTerm) {
    return allSubforums;
  }
  return allSubforums.filter((subforum) =>
    subforum.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getSubForumById = (subforumId) => {
  return allSubforums.find((subforum) => subforum.id == subforumId);
};
