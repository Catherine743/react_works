import { useEffect, useState } from "react";


const useFetch = (url) => {
    const[data,setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            // console.log(res)
            res.json().then(result => {
                console.log(result.products);
                setData(result.products)
            })
        })
    },[])

    return data
}

export default useFetch