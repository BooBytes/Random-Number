
import { useState } from "react";


function Random()
{

    var [number,setrandomnum] = useState(0)

    function create()
    {
       var newnumber = Math.floor(Math.random()*100)+1
       setrandomnum(newnumber)
    }

    return(
        <div className="container">
            <h1 className="head">Random Number Generator</h1>
            <h1 className="number">{number}</h1>
            <button onClick={create}>Click</button>
        </div>
    )
}

export default Random