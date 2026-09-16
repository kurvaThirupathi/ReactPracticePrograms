import React,{useState} from "react"

const Chips =()=>{
    const [inputChips, setInputChips] = useState("");
    const [chips, setChips] = useState([]);

    const handleInputChips = (e) => {
        if (e.key === "Enter" && inputChips.trim() !== "") {
            //e.preventDefault();
            setChips((prev) => {
                return [...prev, inputChips]

            })

            setInputChips("")
        }


    }
    const removeChip = (index) => {
        //alert(`test ${index}`)

        const removeChipData = [...chips];
        removeChipData.splice(index, 1);
        setChips(removeChipData)


    }
    return (
        <div>

            <div className="max-w-md mx-auto">

                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    </div>
                    <input type="text" value={inputChips} id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required onChange={(e) => { setInputChips(e.target.value) }} onKeyDown={(e) => handleInputChips(e)} />

                </div>
            </div>
            <div>
                {
                    chips.map((chipsData, ind) => {
                        return <span id={ind} key={ind} className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded gap-1">
                            <img className="w-3.5 h-3.5 rounded-full me-1" src="https:www.flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                            {chipsData}
                            <button type="button" className="inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-brand-soft" aria-label="Remove" onClick={() => removeChip(ind)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                <span className="sr-only">Remove badge</span>
                            </button>
                        </span>
                    })
                }
            </div>
        </div>
    )
}

export default Chips