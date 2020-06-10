import React,{useState} from "react"
import "./inc.css"
export default function Test1()
{
    const [heighto,setHeighto]=useState([0,0])
    var lim;
    function handleMouse(event)
    {
        var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords)
        setHeighto([x,y])
        y=Math.max(Math.abs(500-y),0)
        lim=y.toString()+"px"
        
    }
    return(
        <div>
        <div id="cup" className="cup"  onClick={handleMouse} >
            <img src="maze.png" style={{width:"150px",height:heighto[1]}}/>
        </div>
        <div  style={{backgroundImage: `url("maze.png")` }} ><h2 onClick={handleMouse} >hello</h2></div>
        </div>
        )
}

{/* style={{backgroundImage: `url("maze.png")` }} */}