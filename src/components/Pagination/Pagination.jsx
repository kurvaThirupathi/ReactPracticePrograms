import React,{useState, useEffect} from "react"

const ProductData = ({title,image}) =>{
    return(
            <div className="max-w-sm  shadow-md">
                
                    <img className="m-auto" src={image} alt={title} style={{width:"100px",height:"100px"}} />
                
                <div className="p-6 text-center">
                    <span className="inline-flex items-center text-md font-semibold px-1.5 py-0.5 rounded-sm">
                       
                         {title}
                    </span>
                    
                    
                </div>
            </div>

            
           
            
       
    )

}


const page_size=10;

const Pagination =()=>{
    const [currentPage, setCurrentPage] = useState(0)

    const [product,setProduct]=useState([])

    const fetchData =async ()=>{
           const res= await fetch("https://dummyjson.com/products?limit=500",{method:"get"})
           const data=await res.json();
          //console.log(data.products);
           setProduct(data.products)
    }
    useEffect(()=>{
            fetchData();
    },[])
    const handleCurrentPage =(n) =>{
        setCurrentPage(n);
    }
    const previousPage=()=>{
        setCurrentPage((prev)=>
            {
                return prev-1;
            }
        )
    }
    const nextPage=()=>{
        setCurrentPage((prev)=>{
        return prev+1
        })
           
       
    }

    const total_pages= product.length;
    const noOfPages=Math.ceil(product.length/page_size);
    const start=currentPage*page_size;
    const end=start+page_size;
    //console.log(page_size +"\n"+ total_pages +"\n"+ noOfPages + "\n" + start +"\n" + end);
    

    return !product.length ?(
        <h3>No Product display</h3>
    ): (
        <div>
            <h2 className="text-center text-xl font-semibold my-2.5">Pagination</h2>
           
            <div className="m-auto my-5" style={{width:"95%"}}>

            
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
            {
                product.slice(start,end).map((productList,index)=>{
                    return <ProductData key={index} title={productList.title} image={productList.thumbnail} />
                })
            }
            </div>
            </div>
             <div className="text-center mt-2">
                <button disabled={currentPage===0} className={`border border-solid p-2 text-sm font-medium rounded-full ${currentPage===0?"cursor-no-drop":"cursor-pointer"}`} onClick={()=>previousPage()}>Previous</button>
                {
                    [...Array(noOfPages).keys()].map((n)=>{
                        return <button key={n} className={`text-md font-semibold border border-solid border-gray-800 p-2 rounded-full w-10 h-10 m-2 cursor-pointer ${n===currentPage?'bg-blue-600 text-white':''}`} onClick={()=>{handleCurrentPage(n)}}>{n+1}</button>
                    })
                }
                <button disabled={currentPage===noOfPages-1} className="border border-solid p-2 text-sm font-medium rounded-full cursor-pointer" onClick={()=>nextPage()}>Next</button>
            </div>
            
            
        </div>
    )
}

export default Pagination