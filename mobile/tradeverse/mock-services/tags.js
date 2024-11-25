import allTags from '../mock-data/all-tags'

export default function searchTags(searchKey) {
  if (!searchKey) {
    return allTags
  }

  return allTags.filter((tag) =>
    tag.label.toLowerCase().includes(searchKey.toLowerCase())
  )
}
