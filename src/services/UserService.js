import axios from 'axios';

const userService = {
  getToken: async (email, password) => {
    const response = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });
    return response.data.token;
  },
  removeToken: async (token) => {
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {}
  },
};

export default userService;
