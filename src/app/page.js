"use client";
import axios from"axios"
import { useState } from "react"

export default function Home() {


   const[answer, setAnswer] = useState("Nothing yet...")

 async function note(event){
    event.preventDefault();
    
    const mainingredient = event.target.name.value;
    const dishtype = event.target.age.value;
    const theme = event.target.topic.value; 

    const response = await axios.post("/api/create-image", {
      mainingredient,
      dishtype,
      theme
      
    })
    //console.log(response.data.answer)
    setAnswer(response.data.answer)

    return <div>{response.data.answer}</div>

  }
  
  return (
    <div>
    <form onSubmit={note} className="flex flex-col">

     <input className="border-slate-500" type="text" name="mainingredient" placeholder="เนื้อที่จะใช้ในอาหาร" />

     <input className="border-slate-500" type="text" name="dishtype" placeholder="เมนูอาหารเช่น appitiser,main course" />

     <input className="border-slate-500" maxLength="50" type="text" name="theme" placeholder="conceptของอาหารจานนี้" />
     
     <button type="submit"> disabled=(isLoading) {isLoading ? 'loading': 'Submit'} </button>

    </form>



    <p className="p-4">(isLoading ? 'Loading...' : '')</p>
    <p className="p-4">{answer}</p>
    </div>
  );
}
