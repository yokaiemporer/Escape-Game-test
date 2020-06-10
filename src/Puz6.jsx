import React,{useState,useEffect} from "react"
export default function Puz6()
{
    const [input1,setInput1]=useState(false)
    const [input2,setInput2]=useState(false)
    const [input3,setInput3]=useState(false)
    const [input4,setInput4]=useState(false)
    const [input5,setInput5]=useState(false)
    const [or1,setOr1]=useState(false)
    const [or2,setOr2]=useState(false)
    const [or3,setOr3]=useState(false)
    const [or4,setOr4]=useState(false)
    const [not,setNot]=useState(false)
    function onPress(ev)
    {
        if(ev.target.id=="1")
        setInput1(!input1)
        if(ev.target.id=="2")
        setInput2(!input2)
        if(ev.target.id=="3")
        setInput3(!input3)
        if(ev.target.id=="4")
        setInput4(!input4)
        if(ev.target.id=="5")
        setInput5(!input5)
    }
    useEffect(()=>{
        setOr1(input1&input2)
        setOr2(input3&input5)
        setOr3(or1&or2)
        setNot(!input4)
        setOr4(not&or3)

    })
    function mouseCoord(event)
    {
        console.log(event.clientX,event.clientY)
    }

    return (
        <div style={{backgroundImage:`url(gates.png)`,height:"90vh",width:"60vw"}} onClick={mouseCoord}>
            herrro
    <button id="1" onClick={onPress}>{input1?"on":"off"}</button><br />
    <button id="2" onClick={onPress}>{input2?"on":"off"}</button><br />
    <button id="3" onClick={onPress}>{input3?"on":"off"}</button><br />
    <button id="4" onClick={onPress}>{input4?"on":"off"}</button><br />
    <button id="5" onClick={onPress}>{input5?"on":"off"}</button><br />
        <div style={{color:"red"}}>
            <div style={{position:"absolute",left:347,top:25}}>OR1:{or1}</div><br/>
            <div style={{position:"absolute",left:340,top:212}}>OR2:{or2}</div><br/>
            <div style={{position:"absolute",left:397,top:370}}>NOT:{not?"set":"unset"}</div><br/>
            <div style={{position:"absolute",left:529,top:150}}>OR3:{or3}</div>
            <div>ANSwER IS{or4}</div>
            <br/>
            {/* <div className={}> */}

            </div>

            {/* <svg height="210" width="500">
  <line x1="69" y1="39" x2="347" y2="25" style={{stroke:"rgb(255,0,0)",strokeWidth:"2"}} />
</svg> */}

        </div>


        // </div>
    )
}