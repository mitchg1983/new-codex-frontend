import axios from 'axios';

export const logInUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: sampleUserData });
  }, 1000);
});

export const logOutUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Sign out successfully');
  }, 1000);
});
