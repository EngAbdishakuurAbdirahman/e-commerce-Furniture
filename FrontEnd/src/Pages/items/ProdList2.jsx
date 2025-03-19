import React from 'react'
import Prod2 from './Prod2'
import lux2 from "../../assets/lux2.jpg"
import lux3 from "../../assets/lux3.jpg"
import lux4 from "../../assets/lux4.jpg"
import lux5 from "../../assets/lux5.jpg"

function ProdList2() {
  return <>
    <div className="flex justify-around px-9 pl-2">
            <Prod2 img={lux3} title="T-shirt" price="12"/>
            <Prod2 img={lux2} title="T-shirt" price="12"/>
            <Prod2 img={lux4} title="T-shirt" price="12"/>
            <Prod2 img={lux5} title="Luxury" price="12"/>
            
        </div>
    </>
  
}

export default ProdList2