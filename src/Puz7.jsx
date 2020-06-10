import React, { useEffect,useState } from "react"
export default function Puz7()
{

    const [Inventory,setInventory]=useState([]) 
    const [roverItems,setRoverItems]=useState([])
    const [battery,setBattery]=useState(null)
    const [materials,setMaterials]=useState({
      tasks:[
        {name:"PCB",positionX:130,positionY:130,bgColor:"red",curPos:"inventory"},
        {name:"Compass",positionX:130,positionY:130,bgColor:"green",curPos:"inventory"},
        {name:"Battery",positionX:130,positionY:130,bgColor:"yellow",curPos:"inventory"},
        {name:"Map",positionX:130,positionY:130,bgColor:"blue",curPos:"rover"},
      ]
    })
    
    useEffect(()=>{

      let f={
        inventory:[],
        rover:[],
        battery:[]
      }
      materials.tasks.forEach((t)=>{
        
          f[t.curPos].push(
          <div 
          id={t.name}
          key={t.name}
          style={{width: "200px",
                  height: "50px",
                  backgroundColor: t.bgColor}}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          >{t.name}</div>
                  )
          
      })
      console.log(f)
      setInventory(f.inventory)
      setRoverItems(f.rover)
    },[materials])
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
      }
      var onDragOver = (ev) => {

        ev.preventDefault();

      }
      var onDrop = (ev, cat) => {


        let temp=[]
        let id=ev.dataTransfer.getData("id")
        materials.tasks.forEach((t)=>{
          if(t.name==id)
          {
            t.curPos=cat
          }
          temp.push(t)
        })
        console.log(temp)
        setMaterials({
          tasks:temp
        })
      }

    return(
        

            
              <div className="App">
               
                <div id="rover" 
                style={{width: "900px", height: "900px",backgroundImage:`url(vehicle.jpeg)`}} onClick={(ev)=>console.log(ev.clientX,ev.clientY)}>
                {roverItems}
                <div id="battery" style={{height:"20%",width:"100%",left:`calc(65400/900)+"px"`,top:"60%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "battery")}}>
                  {battery?battery:<p style={{color:"red"}}>here</p>}
                </div>
                </div>
                {/* <div 
                    onDragStart={(e) => onDragStart(e, 1)}
                    draggable
                    className="game-draggable"
                    style={{ backgroundColor: "red", width: "100px", height: "100px" }}
                  ></div> */}
                  <div id="inventory"
                  onDragOver={(e)=>onDragOver(e)}
                  onDrop={(e)=>{onDrop(e, "inventory")}}
                  style={{height:"100px",width:"100px",borderColor:"red"}}>
                    {Inventory}
                  </div>

              </div>
            
          
    )
}