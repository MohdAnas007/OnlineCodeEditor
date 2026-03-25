
export const HandleRun = async (code, SendCodeToServer, setCodeOutput, input, language, setIsLoading) => {
  if (setIsLoading) setIsLoading(true);
  try {
    const result = await SendCodeToServer(code, input, language);
    if (result.error) {
      setCodeOutput(result.error);
    } else {
      setCodeOutput(`${result.text}\n${result.message}`);
    }
  } finally {
    if (setIsLoading) setIsLoading(false);
  }
}