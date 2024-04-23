"use client";
import axios from"axios"
import { useState } from "react"

export default function Home() {

   const[isLoading, setIsLoading] = useState(false)
   const[answer, setAnswer] = useState("Nothing yet...")

 async function note(event){
    event.preventDefault();
    
    const mainingredient = event.target.mainingredient.value;
    const dishtype = event.target.dishtype.value;
    const theme = event.target.theme.value; 
    const garnish = event.target.garnish.value;

    const response = await axios.post("/api/create-image", {
      mainingredient,
      dishtype,
      theme,
      garnish
      
    })
    //console.log(response.data.)
    setAnswer(response.data.answer)
    setIsLoading(false) ;

  }
  
  return (
    <div>
    <form onSubmit={note} className="flex flex-col">

     <input className="border-slate-500" type="text" name="mainingredient" placeholder="เนื้อที่จะใช้ในอาหาร" />

     <input className="border-slate-500" type="text" name="dishtype" placeholder="เมนูอาหารเช่น appitiser,main course" />

     <input className="border-slate-500" maxLength="50" type="text" name="theme" placeholder="conceptของอาหารจานนี้" />
     
     <input className="border-slate-500" maxLength="50" type="text" name="garnish" placeholder="วัตถุดิบโรยตกแต่งจาน" />
    
     <button type="submit" disabled={isLoading} >  {isLoading ? 'loading': 'Submit'} </button>

    </form>



    <p className="p-4">{isLoading ? 'loading...': ''}</p>
    <p className="p-4">{answer}</p>
    {answer && <img src={answer} className="w-full" />}
    </div>
  );
}
