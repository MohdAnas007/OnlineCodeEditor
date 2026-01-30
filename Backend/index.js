const express=require('express');
const PORT=8080;
const app=express();
const {RunDockerContainer}=require('./Services/RunDocker');
const cors=require('cors');
const path=require('path');
const fs=require('fs');

app.use(express.json());

app.use(cors(
    {
        origin:[
            "http://localhost:5173",
            'http://localhost:5174/',

        ]
    }
))
app.post('/api/runcode',async(req,res)=>{
    const {code,input,language}=req.body;
    const config2={
            python:{extension:'py'},
            cpp:{extension:'cpp'},
            java:{extension:'java'}
        }
        const fileend=config2[language].extension
  
    try{
        const codeFilePath=path.join(__dirname,'temp.'+fileend);
        const inputFilePath=path.join(__dirname,'input.txt');
        fs.writeFileSync(codeFilePath,code,'utf-8');
        fs.writeFileSync(inputFilePath,input,'utf-8');
        const x=await RunDockerContainer(codeFilePath,inputFilePath,language);

        return res.status(201).json({message:x});

    }
    catch(err){
     return res.status(400).json({message:err})
    }
})

app.listen(PORT,()=>console.log('server started'));