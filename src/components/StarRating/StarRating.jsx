import React,{useState} from "react"

const StarRating = () =>{
    const [starResult, setStarResult] = useState(0);
    const [hover, setHover]= useState(0)
    
    
    return (
        <div className="">
            <div className="h-screen flex flex-col gap-3 items-center justify-center">
                <div className="text-lg font-medium text-gray-900">Star Rating</div>
                <div>
                    {
                        [...Array(5)].map((_, index)=>{
                            //  here basically value should be there but here value is undefined so ' _' mentioned  is variable name
                            const value=index+1
                            return <span key={index} id={index} className={`text-2xl font-normal  cursor-pointer ${value <= (hover || starResult)?'text-yellow-400':'text-gray-500'}`}
                             onClick={()=>setStarResult(value)}
                             onMouseLeave={()=>{setHover(0)}} onMouseEnter={()=>{setHover(value)}}
                             >&#9733;</span>

                        })
                    }
                </div>
                <div>Result <span className="text-xl font-medium text-gray-900">{hover || starResult}</span></div>
            </div>
            
        </div>
    )

}
export default StarRating