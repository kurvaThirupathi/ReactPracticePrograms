import React,{useEffect, useState} from "react"
import CoinsDatalist from "../CoinsDataList/CoinsDatalist";
import logo from "../../assets/loading-load.gif";


const InfiniteScroll = () =>{
    
    const [coinsData, setCoinsData]=useState([]);
    const [page, setPage]=useState(1);
    const [loader, setLoader]=useState(false)
     const [hasMore, setHasMore] = useState(true);

    const fetchData = async () =>{
         if (!hasMore) return;
        try{
             setLoader(true);
        const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`);
        const json = await data.json();
        if (json.length === 0) {
        setHasMore(false);
        return;
      }
       // console.log(json);
        setCoinsData((prev) =>[...prev, ...json])
           
    }

catch(error) {
console.log("API Error:", error);

}
finally{
 setLoader(false);
 //alert("hai")
//alert(json.length)
 //if(json.length===0) return setLoader(false);
}
    }

    useEffect(()=>{
            fetchData();
    },[page])

    const handleScroll = () =>{
        // console.log("Height:", document.documentElement.scrollHeight);
        // console.log("top:", document.documentElement.scrollTop);
        // console.log("window:", window.innerHeight);
        //window+top

        if( !loader &&
      hasMore && window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)
            {
                //setLoader(true)
            setPage((prev) => prev+1)
            
        }
    }

    useEffect(()=>{
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
    },[loader, hasMore])
    return (
        <div>
            <h3 className="text-center font-semibold text-xl mt-5">Infinite Scroll</h3>
            <CoinsDatalist CoinsDataView={coinsData}/>
            {loader && <img  src={logo} alt="loader" className="m-auto h-24 w-24" />}
             {!hasMore && (
        <p className="text-center my-4 font-semibold">
          No more data available
        </p>
      )}
        </div>
    )
}

export default InfiniteScroll