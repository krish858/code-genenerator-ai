import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import express , { Request,Response } from "express";

dotenv.config()

const app = express();
const port = 3000;

const key:string = process.env.api_key || '';
const genAI = new GoogleGenerativeAI(key);


app.use(cors())
app.use(express.json());

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run(a:string):Promise<string>{
    const prompt = "Write a react code using tailwind shadcn ionicon for a  " + a + "only give me code snippet in jsx dont explain me anything"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text:string = await response.text();
    return text
}


app.post("/",async(req:Request,res:Response)=>{
    const query:string = req.body.query;
    const qres:string  = await run(query);
    res.json({
        msg: qres
    })
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})