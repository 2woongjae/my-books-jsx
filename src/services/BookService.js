import axios from 'axios';

const API_URL = 'https://api.marktube.tv/v1/book';

export default class BookService {
  // Book List
  static async getBooks(token) {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Book Detail
  static async getBook(token, bookId) {
    try {
      const response = await axios.get(`${API_URL}/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Book Create
  static async addBook(token, book) {
    try {
      const response = await axios.post(API_URL, book, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Book Delete
  static async removeBook(token, bookId) {
    try {
      const response = await axios.delete(`${API_URL}/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Book Edit
  static async editBook(token, bookId, book) {
    try {
      const response = await axios.patch(`${API_URL}/${bookId}`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
