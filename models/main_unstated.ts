import React, { useState, useEffect } from "react"
import { createContainer } from "unstated-next"
import { render } from "react-dom"
import { useRouter } from 'next/router';

function useHeaderIndex(initialState = 0) {
    let router = useRouter();
    let [headerIndex, setHeaderIndex] = useState(0)
    const changeCurrentHeaderIndex = (target: number, path: string) => {
        console.log('现在的headerIndex', headerIndex);
        console.log('需要修改的target', target);
        setHeaderIndex(target);
        router.push(path);
        // console.log('现在的headerIndex', headerIndex);
    } 
    useEffect(() => {
        console.log('现在的headerIndex', headerIndex);
    }, [headerIndex]);
    return { headerIndex, changeCurrentHeaderIndex };
}
export const HeaderIndexer= createContainer(useHeaderIndex);

