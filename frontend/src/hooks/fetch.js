import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, method = 'POST', body = null, options= {})=> {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                setLoading(true)
                const response = await axios({url,method,data:body, ...options,})
                setData(response.data)
            }catch(error){
                setError(error.response? error.response.data : 'Error fetching data')
            }finally{
                setLoading(false)
            }
        }
        fetchData();
       
    },[url, method, body, options])

    return{data, error, loading};

}

export default useFetch;
