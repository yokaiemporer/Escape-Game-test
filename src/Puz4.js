import React, { useState } from 'react';
import logo from './logo.svg';
import SignatureCanvas from 'react-signature-canvas'

import './App.css';
function Puz4(props) {
  let level=props.level
  let setLevel=props.setLevel
  const [which,setWhich]=useState(0)
  let c_gridMap= {
  
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px 50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px 50px 50px 50px",
    backgroundImage: `url('images/maze.png')`
    
  }
  
  let c_gridMapCell ={
    backgroundColor:"rgba(255, 255, 255, 0.8)",
    fontSize: "30px",
    textAlign: "center"
  }
  let vals={}
  let oppaio={}
  for(let i=1;i<65;i++){
  vals[i.toString()]="U"
  oppaio[i.toString()]=1
  }
  const [value,setValue]=useState(vals)
  const [oppai,setOppai]=useState(oppaio)
  function handleEvent(ev)
  {
    setValue({
      ...value,
      [ev.target.id]:"S"
    })
    setOppai({
      ...oppai,
      [ev.target.id]:1
    })
    // console.log(ev.getBoundingClientRect().x,ev.getBoundingClientRect().x)
  }
  function handleUp(ev)
  {
    setValue({
      ...value,
      [ev.target.id]:"U"
    })
    
  }
  var sigPad = {}
  var clear = () => {
    sigPad.clear()
  }
  function GridCell(props)
{
  return (<div id={props.id} 
            className={c_gridMapCell} 
            style={{opacity:oppai[props.id],color:"red"}}
            onMouseDown={ handleEvent } 
            onMouseUp={handleUp}> 
    h
        
  </div>)
}
function handleMouse()
{

}
function reset()
{
  let vals={}
  let oppai={}
  for(let i=1;i<=64;i++){
  vals[i.toString()]="U"
  oppai[i.toString()]=1.0
  }
  setValue(vals)
  setOppai(oppai)
}
  let gridCells=[]
  for(let i=1;i<65;i++)
  gridCells.push(<GridCell id={i.toString()}/>)
  return (
    <div>
    <div className="App" style={{width:"1000px",height:"1000px",backgroundColor:"white"}}>
  
    <div>
      <button onClick={()=>setWhich(0)} style={{color:"red"}}>Images</button> &emsp;
      <button onClick={()=>{setWhich(1)}} style={{color:"red"}}>Puzzle</button>
    </div>
    {
      which==0
      ?
      <img src ="gates.png" style={{width:"800px"}}/>
      :
        <div className="puz4-grid-map" style={{backgroundImage: `url('mars.png')`,backgroundRepeat:"no-repeat"}} onClick={handleMouse} >
       {gridCells}
       {/* <SignatureCanvas penColor='green' canvasProps={{width: 500, height: 200, className: 'sigCanvas',backgroundColor:"rgb(128,0,0)"}} /> */}
     </div>
     
    
    }

    </div>
    <button onClick={reset} style={{color:"blue"}}>Reset</button>
    <button  onClick={clear}>
          Clear
        </button>
        
    </div>
    
   
  );
}

export default Puz4;
