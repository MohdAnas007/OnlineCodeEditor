import axios from 'axios';
export const SendCodeToServer = async (code, input, language) => {

    try {
        const datafromBackend = await axios.post('http://localhost:8080/api/runcode', { code, input, language });
        return datafromBackend.data;

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