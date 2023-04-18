import axios from 'axios';
import { saveAs } from 'file-saver';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchPhotos = async (q: string, type: string) => {
  return await axios
    .get(
      `https://api.unsplash.com/search/${type}/?client_id=${API_KEY}&query=${q}&per_page=20`
    )
    .then((res) => {
      return res.data;
    });
};

export const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};
