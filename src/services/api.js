import axios from 'axios';

const API_URL = 'https://selfservice.kplc.co.ke/api/publicData/4/newContractList';

export const fetchAccountData = async (accountReference, token) => {
  try {
    const response = await axios.get(API_URL, {
      params: { accountReference },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Returns the API response
  } catch (error) {
    console.error('Error fetching account data:', error);
    throw error;
  }
};
