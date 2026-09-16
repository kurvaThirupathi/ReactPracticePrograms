import React, { useState } from "react"



const MultiDropdown = () => {
    const [country, setCountry] = useState("");
    //const [city, setCity]= useState(0);
    const countries = [
    {

        name: "India",
        value: "IN",
        cities: ["Hyderabdad", "Maharasta", "Delhi"]
    },
    {

        name: "America",
        value: "US",
        cities: ["Texas", "Dallas", "Mississippi"]
    }
]

    return (
        <>
            <div className="flex justify-center mt-5">
                <select className="border border-solid border-gray-600 rounded-lg" value={country} onChange={(e) => { setCountry(e.target.value) }}>
                    <option></option>
                    {
                        countries.map((countryData, index) => {
                            return <option key={index} value={index} >{countryData.name}</option>
                        })
                    }
                </select>
                
                {
                    countries[country] &&
                    <select className="border border-solid border-gray-600 rounded-lg" >
                        <option></option>
                        {
                        countries[country] &&
                            countries[country].cities.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>;
                            })}
                    </select>
                }
                    
                   
                
            </div>
        </>
    )
}

export default MultiDropdown