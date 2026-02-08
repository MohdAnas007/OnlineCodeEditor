import axios from 'axios';
export const SendCodeToServer = async (code, input, language) => {

    try {
       
      console.log(code,language);
        const datafromBackend = await axios.post('http://localhost:8080/api/runcode', { code, input, language });
        console.log("datafromBackend");
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