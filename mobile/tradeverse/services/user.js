import api from "./_axios";

export async function getUserByUsername({ username }) {
  console.log("====================================");
  console.log("params", { username });
  console.log("====================================");
  try {
    const response = await api({
      url: "/auth/get-user-details",
      method: "POST",
      headers: {
        Authorization: undefined,
      },
      data: { username },
    });
    console.log("====================================");
    console.log("get user by username");
    console.log(response.data);
    console.log("====================================");
    return response.data;
  } catch (error) {
    console.error("Get user by username failed", error);
  }
  return null;
}
