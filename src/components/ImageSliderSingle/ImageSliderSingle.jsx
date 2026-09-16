import React, {useState} from "react"

const ImageSliderSingle = () =>{
    const [activeImageIndex, setActiveImageIndex] = useState(0)
     const data = [
        "https://static.vecteezy.com/system/resources/previews/053/742/150/non_2x/a-field-of-pink-flowers-with-yellow-centers-the-flowers-are-in-full-bloom-and-are-arranged-in-a-row-concept-of-beauty-and-tranquility-as-the-flowers-are-a-symbol-of-love-and-happiness-photo.jpg",
        "https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0GVjqFCZ15dfURMZA0FXr9WA0zXJG1jihw_EWv2vCUlnjUZSsi73HyARQnvtzOFDkn2ou2QiLZlNLjmmUsrAosIvy1w9&s&ec=121585077",
        "https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xza06YPiam1vhFygjcZXXXQd1SBRaafGDvgZrExpnkuBqBlnpfLygVjdyo-lmH1u3F_SvoWOZYrFgEzM43aH4WZjRuPE&s&ec=121585077",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjJtkAIGnGAHqmFHN8a9te4kDRX2Y7fBDxRxu8HoRsYK6binve7jigkfFBOsxiTd_fS3AEC_-C_8_X3xOnddNlZAt4JCj&s&ec=121585077",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsf5SAjyLiWaaxeEcO6nwt1AAZ79IDLetOyEDVtS0ZW-lAXiruTfzshASzsSMEaAMKNwtf0ZNdbYAG17HddQkY6fQB26kS&s&ec=121585077",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnml6TXItLmPJT6YJGQImTspVFKcqm0_c2GlVm2IZotxaQ32TuYkpT-9RIou4kg4ODiDBxUigWOuUmeTxhSO5m66jgw2t5&s&ec=121585077"
        
    ]
    const previous = () =>{
        if(activeImageIndex === 0){
            setActiveImageIndex(data.length-1)
        }
        else{
            setActiveImageIndex(activeImageIndex-1)
        }
    }
    const next =()=>{
        setActiveImageIndex((activeImageIndex+1)% data.length)

    }
    return (
        <>
        <div className="max-w-2xl mx-auto my-4">
                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-blue-900 text-white text-sm font-medium rounded-full p-2 cursor-pointer" onClick={()=>previous()}>Prev</button>
                    
                        {
                            data.map((imageView, ind) => {
                                return <img key={ind} src={imageView} className={`object-cover h-48 w-96  rounded-lg ${activeImageIndex===ind?'block':'hidden'}`} />
                                // single image u want write like this 
                                // ${activeImageIndex === ind ? 'block';'hidden'}
                            })
                        }
                  
                    <button className="bg-blue-900 text-white text-sm font-medium rounded-full p-2 cursor-pointer" onClick={()=>next()}>Next</button>

                </div>
            </div>

        </>
    )
}
export default ImageSliderSingle