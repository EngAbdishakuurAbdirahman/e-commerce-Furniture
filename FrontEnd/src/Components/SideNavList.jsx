import React from 'react'

function SideNavList(props) {
  return <>

      
<div className="flex gap-4 text-white pt-10">
    <i className={`fa-solid ${props.icon} text-5xl`}></i>
    <h1 className='text-3xl font-semibold'>{props.title}</h1>
    </div>
    
    </>
  
}

export default SideNavList