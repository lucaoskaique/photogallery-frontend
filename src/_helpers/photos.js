const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:1337/photos');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};