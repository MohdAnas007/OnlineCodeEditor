
import { SendCodeToServer } from "./SendCodetoServer";
export const HandleRun = async (code,SendCodeToServer,setCodeOutput,input) => {
    try {
      
      const response = await SendCodeToServer(code,input);
      setCodeOutput(response.data.message);
    }
    catch (err) {
      console.log(err.message);
    }


}