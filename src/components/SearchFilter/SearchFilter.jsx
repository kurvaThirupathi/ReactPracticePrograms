import React , { useEffect, useState }from "react"

const SearchFilter = () =>{
    const [search, setSearch] = useState("")

    const items = ["Ramesh", "Rahul", "Suresh", "Yellaiah", "Somesh", "Raju"]

    const filterItems = search ? items.filter((itemValues) => {
        return itemValues.toLowerCase().includes(search.toLowerCase())
    }) : items

    const [searchInput, searchInputvalue] = useState("")
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => console.log(error));
    }, []);

        // const searchProducts = products.filter((product) => {
        //  return product.title.toLowerCase().includes(searchInput.toLowerCase())
            
        // })
            
        const searchProducts = products.filter((product) => {
         return product.title.toLowerCase().includes(searchInput.toLowerCase())
            
        })

    return (
        <div className="p-4 ms-4">

            {/* this is normal search  */}

            <input type="text" value={search} className="border border-solid border-gray-300 rounded-sm mb-2 p-2" onChange={(e) => setSearch(e.target.value)} />


            <ul >
                {
                    filterItems.length > 0 ? (
                        filterItems.map((itemValues, ind) => {
                            return <li key={ind}>{itemValues}</li>
                        })
                    ) : <li>Not Found</li>

                }
            </ul>

            {/* useMemo search */}

            <input type="text" className="border border-solid border-gray-800 focus:border-blue-500" value={searchInput} onChange={(e) => searchInputvalue(e.target.value)} />
            <div>
                <table className="border border-solid border-gray-800">
                    <thead>
                        <tr className="mb-2">
                            <td>Title</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Rating</td>
                            <td>Product Image</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          searchProducts.map((product)=>{
                            return <tr  key={product.id}>
                                        <td><div className="w-52 truncate">{product.title}</div></td>
                                        <td><div className="w-52">{product.price}</div></td>
                                        <td><div className="w-52 truncate">{product.description}</div>
                                        </td>
                                        <td><div className=" ">{product.rating.rate}</div></td>
                                         <td><div className="w-52 truncate "><img src={product.image} style={{width:"100px",height:"100px"}}/></div></td>

                            </tr>
                          })  
                        }
                    </tbody>

                </table>
                {
                /* {
                    searchProducts.map((product)=>(
                        <div className="flex gap-2" id={product.id} key={product.id}>
                            <div>{product.id}</div>
                            <div>{product.title}</div>
                            <div>
                                <img src={product.image} style={{width:"100px",height:"100px"}}/>
                            </div>
                            <div>{product.price}</div>
                            <div>{product.rating.rate}</div>

                        </div>
                        
                    ))
                } */
                }

            </div>

        </div>
    )
}

export default SearchFilter



