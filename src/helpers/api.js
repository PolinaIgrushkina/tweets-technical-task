import axios from "axios";

const api = axios.create({
  baseURL: "https://643abc9190cd4ba5630062e8.mockapi.io",
});

export const fetchUsers = async (page = 1) => {
  try {
    const response = await api.get("/users", {
      params: {
        page,
        limit: 12,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const followUser = async (id, followers) => {
  try {
    await api.put(`/users/${id}`, {
      followers,
      isFollowed: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const unFollowUser = async (id, followers) => {
  try {
    await api.put(`/users/${id}`, {
      followers,
      isFollowed: false,
    });
  } catch (error) {
    console.error(error);
  }
};
