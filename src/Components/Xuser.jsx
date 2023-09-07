import Axios from "axios";
import { useState } from "react";
const Xuser = () => {
  const [text,setText]=useState("");





  const showText= (name)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}`).then((res)=>{
        setText(res.data[0].excuse);
        console.log(res.data[0]);
    })
  }

  return (
    <div>
      <h1>Press One Button and Get Your Excuse</h1>
      <button onClick={()=>showText("party")}>Party</button>
      <button onClick={()=>showText("family")}>Family</button>
      <button onClick={()=>showText("office")}>Office </button>
      <h1>{text}</h1>   
    </div>
  );
};
export default Xuser;
