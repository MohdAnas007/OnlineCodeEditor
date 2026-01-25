
export const HandleRun = async (code, SendCodeToServer, setCodeOutput, input, language) => {
  try {

    const response = await SendCodeToServer(code, input, language);
    console.log(response);
    setCodeOutput(response.data.message);
  }
  catch (err) {
    console.log(err.message);
  }


}