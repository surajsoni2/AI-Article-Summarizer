import { useState } from "react";
import axios from "axios";
import { loader} from "../assets";

const Summary = () => {

    const [textdata, setTextdata] = useState("")
    const [summary, setSummary] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY
        const options = {
            method: 'POST',
            url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            },
            data: {
                lang: 'en',
                text: textdata
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            const data = JSON.stringify(response.data);
            setSummary(data);
            setLoading(false)

        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }


    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };
    return (
        <>
            <section className='mt-16 w-full max-w-xl'>
            <h1 className="text-center my-3 text-lg">Summarize Text</h1>
                <div>
                    <form
                        method="post"
                        className="flex flex-col justify-center items-center"
                        onSubmit={handleSubmit}>

                        <textarea
                            name="text"
                            id="text"
                            className="w-full"
                            cols="30"
                            rows="8"
                            placeholder="Enter or Paste your text"
                            value={textdata}
                            onChange={(e) => setTextdata(e.target.value)}
                            onKeyDown={handleKeyDown}
                            required
                        >

                        </textarea>
                        <button type="submit"
                            className="w-20 rounded mt-4 bg-orange-600 text-white"
                        >Submit</button>
                    </form>
                </div>
                <div className='flex flex-col gap-1 max-h-60 overflow-y-auto mt-10'>
                   {(loading) ? 
                   <img src={loader} alt='loader' className='w-20 h-20 object-contain mx-auto' />
                   :<p className='font-inter font-medium text-sm text-gray-700 my-5'>{summary}</p>
                   }
                </div>
            </section>
        </>
    )
}

export default Summary