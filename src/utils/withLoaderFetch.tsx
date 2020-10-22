import React from 'react';
import {FetchDataType, useFetch} from "./useFetch";
import {Loader} from "../common/Loader";
import {FetchData} from "../api/api";

export interface WithData {
    data: FetchData
}

export const withLoaderFetch = (WrapComponent: React.ComponentType<WithData>, getData: FetchDataType<FetchData>, id?: number | string) => () => {
    const {isLoading, error, data} = useFetch(getData, id);

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <div>Error</div>
    }

    return <WrapComponent data={data}/>
}