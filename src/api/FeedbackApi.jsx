import axios from 'axios';

export const FeedbackApi = axios.create({
  baseURL: 'https://formspree.io/f/xpzekjwy',
  headers: {
    'Content-Type': 'application/json',
  },
});
