import axios from 'axios';
export const SendCodeToServer=async (code,input)=>{

    try{
        const response=await axios.post('/api/runcode',{code,input});
        
        return response;
        

    }
    catch(err){
        console.log(err.message);
    }

}