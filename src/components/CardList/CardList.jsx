import React from 'react'

const CardList = ({image,name, price}) => {
  return (
    <div className='m-auto'>
      <div className='text-center'>
        <img src={image} alt={image} className='h-24 w-24 object-contain m-auto' />
        <div>{name}</div>
      </div>
    </div>
  )
}

export default CardList
