import axios from 'axios';
const API_URL='http://localhost:8080';

export const SendCodeToServer = async (code, input, language) => {
    try {
      
        const result = await axios.post(`${API_URL}/api/runcode`, { code, input, language });
        console.log(result.data.message);
        return result.data;
    }
    catch (err) {
      if(err.response){
        return {error:err.response.data.message};

      }
      return {
        error:err.message,
      }
    }

}