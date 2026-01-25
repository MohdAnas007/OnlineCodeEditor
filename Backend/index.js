const express=require('express');
const PORT=8080;
const app=express();
const {CompileCode}=require('./Services/Compilecode');
const {RunDockerContainer}=require('./Services/temp2');
const path=require('path');
const fs=require('fs');

app.use(express.json());
app.post('/api/runcode',async(req,res)=>{
    const code = req.body.code;
    const input=req.body.input;
    console.log(code,input);
  
    try{
        const codeFilePath=path.join(__dirname,'temp.cpp');
        const inputFilePath=path.join(__dirname,'input.txt');
        fs.writeFileSync(codeFilePath,code,'utf-8');
        fs.writeFileSync(inputFilePath,input,'utf-8');
        console.log("jhello kjbgk");
        const x=await RunDockerContainer(codeFilePath,inputFilePath);
        console.log(x);
        return res.status(201).json({message:x});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:err.toString()});

    }
})

app.listen(PORT,()=>console.log('server started'));