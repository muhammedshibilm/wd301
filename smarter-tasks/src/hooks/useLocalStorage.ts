import { useEffect, useState } from "react";

const getStoredValue =  <T>(key: string, defaultValue: T) =>{
    const savedItem =  localStorage.getItem(key);
    if (savedItem) {
        return JSON.parse(savedItem);
    }
    return defaultValue;
}

export const useLocalStorage  = <T,>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] =>{
    const [ value , setValue ] = useState(()=>{
        return (
            getStoredValue(key,defaultValue)
        );
    });

    useEffect(()=>{
          
        localStorage.setItem(key, JSON.stringify(value));

    },[value, setValue]);

    return [value, setValue]
}