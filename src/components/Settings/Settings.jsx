import React from 'react'

const Settings = ({data,setData}) => {
    const {theme}=data;
    const handleChange=(e)=>{
        setData((prev)=>{
            return {...prev, theme:e.target.name}
        })
    }
  return (
    <div>
      <div className='mb-2'>
               
                <input type="radio" name="light"  className='border border-solid border-gray-600 rounded-lg p-1 cursor-pointer' checked={theme==="light"}  onChange={handleChange} /> Light <br />
                <input type="radio" name="dark"   className='border border-solid border-gray-600 rounded-lg p-1 cursor-pointer' checked={theme==="dark"} onChange={handleChange}/> Dark
        </div>
        
    </div>
  )
}

export default Settings
