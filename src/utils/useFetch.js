import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState({isLoading: true, results: []})

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData({
                isLoading:false,
                results: data
            }))
    }, [url])

    return { data }
}

export default useFetch;