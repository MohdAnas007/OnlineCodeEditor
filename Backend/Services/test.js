// here i will define strategy pattern and run code also 
// then i will seperate it into different folders and file 
// user will select language and send code and input i will indentify the language and 
// send the code and input to the resprective compiler the compiler will compile it and then
// return the output 
const {PythonShell}=require('python-shell');
const codeCompiler=(code,input)=>{
   return new Promise((resolve,reject)=>{
     PythonShell.runString(code,null,(err,result)=>{
        if(err){
          return reject(`Some error occured ${err}`)

        }
        return resolve(result);
        
    })
   })
}
class python{
    async compile(code,input){
        // here i have to make a file that will compile on the basis of language
        return await codeCompiler(code,input);

    }
}
class cpp{
    compile(code,input){
        return "inside cpp compiler";

    }
}

class java{
    compile(code,input){
        return "inside java compiler";
        
    }
}


class LanguageSelector{
    constructor(lang){
    this.lang=lang;

    }
    // for selecting language at run time 
    setlang(lang){
        this.lang=lang
    }
    async run(code,input){
        const output=await this.lang.compile(code,input);
        return output;

    }
}

const strategy={
    python:new python(),
    cpp:new cpp(),
    java:new java()
}


const selectLanguageAndRunCode=async (code,input,language)=>{
   // select language from strategy and make a object of the respective language
    try{
            const lang=strategy[language];

            const selector=new LanguageSelector(lang);

            const output=await selector.run(code,input);
            console.log(output);

            return output;
    }
    catch(err){
        console.log(err);
        return err;
    }

}

module.exports={selectLanguageAndRunCode};