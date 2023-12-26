require('dotenv').config();

export const Configuration = () => ({
  signedMessage: process.env.signedMessage,
});
