import { useState } from "react";

export function AddColor() {
  const [color,setcolor] =useState('red') ;
  const [colorlist,setcolorlist]=useState(['purple','red','pink'])
  const styles = {
    fontSize: "29px", backgroundColor: color
  };
  return (
    <div>
      <input value={color} style={styles} onChange={(e) => setcolor(e.target.value)}/>
     <button onClick={() => setcolorlist([...colorlist,color])} >Add Color</button>
    {colorlist.map((cl) => (
      <Colorbox color={cl}/>
    ))}
    </div>
  );
}

function Colorbox({color}) 
{
  const style={
    width:"210px",height:"19px",backgroundColor:color,marginTop:"10px"
  }
  return(
    <div style={style}></div>
  )
}