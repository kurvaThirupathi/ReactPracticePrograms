 import React from 'react'
 import CardList from '../CardList/CardList';
 
 const CoinsDatalist = ({CoinsDataView}) => {
    //const {name, image, current_price}=CoinsDataView;
   return (
     <div className='max-w-screen mx-auto'>
        <div className='grid grid-cols-4'>

        
       {
        CoinsDataView.map((coin)=>{
            return <div className='shadow-md m-2 rounded-lg' key={coin.id} id={coin.id}>
              <CardList  name={coin.name} image={coin.image} price={coin.current_price}/>
              </div>
        })
       }
     </div>
     </div>
   )
 }
 
 export default CoinsDatalist
 