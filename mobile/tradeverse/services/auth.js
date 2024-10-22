import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./_axios";

export async function getMe({ authToken = "", username = "" }) {
  try {
    const response = await api({
      url: "/auth/get-user-details",
      method: "POST",
    //   method: "GET", // In future
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : null,
      },
      data: username ? { username } : {}, //TODO:/ Delete later
    });

    return response.data;
  } catch (error) {
    console.error("Get me failed", error);
  }
  return null;
}

export async function login({ username, password }) {
  console.log(username, password);

  try {
    await AsyncStorage.removeItem("authToken");
    const response = await api({
      url: "/auth/login",
      method: "POST",
      headers: {
        Authorization: undefined,
      },
      data: { username, password },
    });
    await AsyncStorage.removeItem("authToken");
    console.log(response.data);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    AsyncStorage.setItem("authToken", response.data.token);
    return response;
  } catch (error) {
    throw new Error(error.message ?? "Giriş başarısız");
  }
}

export async function register({
  email,
  password,
  name = "",
  username,
  tag = 0,
  profilePhoto = "",
}) {
  try {
    console.log(email, password, name, username, tag, profilePhoto);

    await AsyncStorage.removeItem("authToken");
    const response = await api({
      url: "/auth/register",
      method: "POST",
      data: {
        email,
        password,
        name,
        username,
        tag,
        profilePhoto,
      },
      headers: {
        Authorization: undefined,
      },
    });
    await AsyncStorage.removeItem("authToken");
    console.log(response.data);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    AsyncStorage.setItem("authToken", response.data.token);
    return response;
  } catch (error) {
    console.log("basarisiz");
    console.log(error);

    throw new Error(error.message ?? "Kayıt başarısız");
  }
}
