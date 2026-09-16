import React from 'react'

const Interest = ({data,setData}) => {
    const {interest}=data

    const handleChange=(e)=>{
        setData((prev)=>({
            ...prev,
            interest:e.target.checked ? [...prev.interest, e.target.name] : prev.interest.filter((i) => i !== e.target.name),
        }));

    }
  return (
    <div>
        <div className='mb-2'>
               
                <input type="checkbox" name="Css"   className='cursor-pointer border border-solid border-gray-600 rounded-lg p-1' checked={interest.includes("Css")} onChange={handleChange}/> Css <br />
                <input type="checkbox" name="Javascript"  className='cursor-pointer  border border-solid border-gray-600 rounded-lg p-1' checked={interest.includes("Javascript")} onChange={handleChange}/> Javascript
        </div>
        
    </div>
  )
}

export default Interest
