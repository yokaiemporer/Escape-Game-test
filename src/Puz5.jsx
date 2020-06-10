import React ,{useState} from "react"
import "./puz5.css"

export default function Puz5()
{
	const [height,setHeight]=useState({})
	const [height2,setHeight2]=useState({})
	const [height3,setHeight3]=useState({})
	function handleClick()
	{
		let heighto = document.getElementById('water').clientHeight;
		console.log(heighto)
		setHeight({height:heighto})
	}
	function handleClick2()
	{
		let heightoo = document.getElementById('water2').clientHeight;
		console.log(heightoo)
		setHeight2({height:heightoo})
		
	}
	function handleClick3()
	{
		let heightooo = document.getElementById('water3').clientHeight;
		console.log(heightooo)
		setHeight2({height:heightooo})
		
	}
	function reset()
	{
		setHeight({})
		setHeight2({})
		setHeight3({})

	}
	function showml(ev)
	{
		alert(ev.target.value)
	}
	let vals=["30","60"]
    return(
        <table>
		<tr>
			<td>
	<div id="scale" style={{height:"400px",width:"20px",color:"red"}}>
		<div id="1" style={{width:"300px",height:"50px"}} onClick={showml}>60</div>
		<div id="2" style={{width:"300px",height:"50px"}}>30</div>
		<div id="3" style={{width:"300px",height:"50px"}}>10</div>
		</div>
			</td>
			<td>
				<div id="container">
					<div id="glass" >
						<div id="water" style={height} onClick={handleClick}></div>
						<button onClick={reset}>reset</button>
					</div>
				</div>
			</td>
			<td>
				<div style={{width:"250px"}}></div>
			</td>
			<td>
			<div id="container">
					<div id="glass2" >
						<div id="water2" style={height2} onClick={handleClick2}></div>
						<button onClick={reset}>reset</button>
					</div>
				</div>
			</td>
			<td>
			<div style={{width:"400px"}}></div>
			</td>
			<td>
			<div id="container">
					<div id="glass3" >
						<div id="water3" style={height3} onClick={handleClick3}></div>
						<button onClick={reset}>reset</button>
					</div>
				</div>
			</td>
		</tr>
	</table>
    )
}