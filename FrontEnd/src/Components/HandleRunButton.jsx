
export const HandleRun = async (code,SendCodeToServer,setCodeOutput) => {
    try {
      const text = code;
      const response = await SendCodeToServer(text);

      setCodeOutput(response.data.message);
    }
    catch (err) {
      console.log(err.message);
    }


}