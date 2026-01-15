import axios from 'axios';
export const SendCodeToServer=async (code)=>{

    try{
        const response=await axios.post('/api/runcode',{code})
        return response;
        

    }
    catch(err){
        console.log(err.message);
    }

}