import React from "react"
import SignatureCanvas from 'react-signature-canvas'
function Dotsu()
{

  var sigPad = {}
  var clear = () => {
    sigPad.clear()
  }
    return (
      <div>
        hmmmmmmm<br/>
      <SignatureCanvas penColor='green'
        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
        ref={(ref) => { sigPad = ref }}/>
        hmmmmmmm<br/>
        <button  onClick={clear}>
          Clear
        </button>
    
    </div>
    )
}
export default Dotsu