import { Storage } from "../util/storage";

import api from "./_axios";

export async function getMe({ username = '' }) {
  try {
    const response = await api({
      url: `/user/get-user-details/${username}`,
      method: 'GET',
    })

    return response.data
  } catch (error) {
    throw new Error(error.message || 'Kullanıcı bilgileri alınamadı')
  }
}

export async function login({ username, password }) {
  try {
    // await Storage.removeItem("authToken");
    const response = await api({
      url: '/auth/login',
      method: 'POST',
      headers: {
        Authorization: undefined,
      },
      data: { username, password },
    });

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    
    return response;
  } catch (error) {
    throw new Error(`Failed: ${error.message}` ?? "Giriş başarısız");
  }
}

export async function register({
  email,
  password,
  name = '',
  username,
  tag = 0,
  profilePhoto = '',
}) {
  try {
    console.log(email, password, name, username, tag, profilePhoto);

    await Storage.removeItem("authToken");
    const response = await api({
      url: '/auth/register',
      method: 'POST',
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
    await Storage.removeItem("authToken");
    console.log(response.data);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    Storage.setItem("authToken", response.data.token);
    return response;
  } catch (error) {
    console.log('Register Error ->', error.message)
    throw new Error(error.message || 'Kayıt başarısız')
  }
}

export async function validateToken({ token }) {
  try {
    const response = await api({
      url: '/auth/validate-token',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    console.log('Validate Token Error ->', error.message)
    throw new Error(error.message || 'Token doğrulama başarısız')
  }
}
