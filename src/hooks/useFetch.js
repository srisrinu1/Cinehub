import React, { useState, useEffect, useCallback } from 'react';
import http from "../Core/Axios";

const useFetch = (url, param, page) => {
    const [response, setResponse] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //   const [isLoading, setIsLoading] = React.useState(false);
    const apiKey = process.env.REACT_APP_API_KEY;

    const URL = url + `?api_key=${apiKey}&${param}`
    const fetchData = async() => {
        setLoading(true);
        try {
            const { data } = await http.get(URL, {

            });

            setResponse(data);
            setLoading(false);

        } catch (error) {
            setError(error);
        }
    };


    useEffect(() => {
        fetchData();
        return (() => {
            setResponse([]);
        })

    }, [URL, apiKey, page, param])





    return {
        response,
        Loading
    }

};

export default useFetch;