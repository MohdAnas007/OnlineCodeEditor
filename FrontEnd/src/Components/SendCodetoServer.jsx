import axios from 'axios';
export const SendCodeToServer = async (code, input, language) => {

    try {
        const response = await axios.post('/api/runcode', { code, input, language });

        return response;


    }
    catch (err) {
        console.log(err.message);
    }

}