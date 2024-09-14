import axios from 'axios';

const fetchUsers = async (page) => {
  const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
  return response.data.results;
};

export default fetchUsers;
