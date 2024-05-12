import React, {createContext, useState, useEffect}  from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    //This will contain all the logic that we want to make available globally
    //we will create react states here
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
       // This will take a dependency array
       fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]); // whenever the client selects a category it will kickstart this method and the respected api will be called to fetch the data for that particular category
    
    const fetchSelectedCategoryData = (query) => {
         setLoading(true);
         fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
         });   
    };
    return (
        <Context.Provider 
        value = {{
            loading, 
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
        }}>         
            {props.children}
        </Context.Provider>
    ) // intention is to pass all the states and methods in the provider such that they are available throughout the website
}

    