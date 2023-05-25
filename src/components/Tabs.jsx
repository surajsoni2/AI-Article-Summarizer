import { useState } from "react"
import Demo from "./Demo"
import Summary from "./Summary"


const Tabs = () => {
    const [option, setOption] = useState("Article")

    const handleOption = () => {
        if (option === "Article") {
            setOption("Text")
        }
        else{
            setOption("Article")
        } 
            
    }
    return (
        <>
            <div className="flex justify-center items-center mt-5">
                <button
                    onClick={handleOption}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Summarize {option}
                </button>
            </div>
            {
                option === "Article"
                    ? <Demo /> : <Summary />
            }
        </>
    )
}

export default Tabs