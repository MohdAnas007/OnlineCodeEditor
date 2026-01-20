const express=require('express');
const PORT=8080;
const app=express();
const {CompileCode}=require('./Services/Compilecode');

app.use(express.json());
app.post('/api/runcode',(req,res)=>{
    const code = req.body.code;
    const input=req.body.input;
    console.log(input,code);

    // console.log(code);
    const x=CompileCode(code,input);

    // console.log(x);

    return res.status(201).json({message:x});

})

app.listen(PORT,()=>console.log('server started'));
