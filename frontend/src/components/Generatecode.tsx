import { useState } from "react"
import Card from "./Card";
import axios from "axios";

function Generatecode() {
  const [query,setQuery] = useState('');
  const [res,setRes] = useState('');

  async function generate(){
    axios.post("http://localhost:3000/",{query: query})
      .then(response =>{
        const msg = response.data.msg
        setRes(msg);
        console.log(res)    
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  } 

  return (
    <div>
      <div className="mt-8">
        <center><h1 className="text-5xl font-bold">v1.dev</h1></center>
        <center><h1 className="text-2xl font-semibold">Ai-Reactjs code generator with shadcn and ionicons</h1></center>
      </div>
      <div className=" mt-8">
        <center>
        <div className="bg-black text-slate-400 border-[2px] rounded-xl flex justify-center w-1/4 p-4">
        <input
        className="outline-none bg-black pl-1 mr-3 border-b-2 border-white"
        type="text"
        placeholder="build me a..."
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        />
        <button type="button" className=" hover:text-white" onClick={generate}>click me</button>
        </div>
        </center>
    </div>
    <center>
      <Card result={res} />
    </center>
    </div>
    
  )
}

export default Generatecode