import {useEffect, useState} from 'react';
import {FetchData} from "../api/api";

export type FetchDataType<T> = () => Promise<T>

export const useFetch = (apiGet: FetchDataType<FetchData>) => {
    const [data, setData] = useState<FetchData>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await apiGet();
                setData(data);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [])

    return {
        data,
        isLoading,
        error
    };
};