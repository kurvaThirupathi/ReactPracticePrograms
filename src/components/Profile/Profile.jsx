import React from 'react'

const Profile = ({data,setData,errors}) => {
    const {name,age,email}= data;

    const handleChange=(e,item)=>{
        setData((prev)=>{
          return  { ...prev, [item]: e.target.value}
        })

    }
  return (
    <div>
        <div className='mb-2'>
            <label htmlFor='name' className='w-24'>Name : </label>
            <input type="text" id="name" value={name} onChange={(e)=>handleChange(e,"name")} className='border border-solid border-gray-600 rounded-lg p-1'/>
            {errors.name && <span className='text-sm text-red-800'>{errors.name}</span>}
        </div>
        <div className='mb-2'>
            <label htmlFor='age' className='w-24'>Age : </label>
            <input type="number" id="age" value={age} onChange={(e)=>handleChange(e,"age")} className='border border-solid border-gray-600 rounded-lg p-1'/>
             {errors.age && <span className='text-sm text-red-800'>{errors.age}</span>}
        </div>
        <div className='mb-2'>
            <label htmlFor='email' className='w-24'>Email : </label>
            <input type="text" id="email" value={email} onChange={(e)=>handleChange(e,"email")} className='border border-solid border-gray-600 rounded-lg p-1'/>
        </div>
    </div>
  )
}

export default Profile
