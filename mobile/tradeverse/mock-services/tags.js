import { allTags } from "../mock-data/all-tags";

export const searchTags = (searchKey) => {
  if (!searchKey) {
    return allTags;
  }

  return allTags.filter((tag) =>
    tag.label.toLowerCase().includes(searchKey.toLowerCase())
  );
};
