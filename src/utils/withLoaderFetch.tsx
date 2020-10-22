import React from 'react';
import {FetchDataType, useFetch} from "./useFetch";
import {FetchData} from "../api/api";
import {Loader} from "../common/Loader";

export interface WithData {
    data: FetchData
}

export const withLoaderFetch =(WrapComponent: React.ComponentType<WithData>, getData: FetchDataType<FetchData>) => () => {
    const {isLoading, error, data} = useFetch(getData);

    if(isLoading) {
        return <Loader />
    }

    if(error) {
        return <div>Error</div>
    }


    return <WrapComponent data={data}/>
}