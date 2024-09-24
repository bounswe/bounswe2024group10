export function formatDate(dateString) {
  if (!dateString) return "Not available";
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}
