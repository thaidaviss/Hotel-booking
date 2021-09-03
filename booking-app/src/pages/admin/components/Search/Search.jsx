import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import "./Search.scss"
function Search(props) {
    const { className, onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);
    const handleOnChange = (value)=>{
        if(onSubmit){
            if( typingTimeoutRef.current)
            clearTimeout(typingTimeoutRef.current);
            setSearchTerm(value)
            typingTimeoutRef.current = setTimeout(()=>
            {
                onSubmit(value);
            },300)
        }
        
        
    }
    return (
        <>
            <input value={searchTerm}
                onChange={(e) => { handleOnChange(e.target.value) }}
                className={"input__search " + className}
                type="text" 
                placeholder="Search..." />
        </>
    );
}

export default Search;