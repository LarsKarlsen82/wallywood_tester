import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const GenreNav = () => {

    const [ apiData, setApiData ] = useState([])

    const getData = async () => {
        const endpoint = `http://localhost:3000/genre/`
        const result = await axios.get(endpoint)
        //console.log(result.data);
        setApiData(result.data);
    }

    useEffect(() => {
        getData()
    }, [setApiData])


    return(
        <nav>
            <h4>Vælg genre</h4>
            <ul>
                {apiData && apiData.map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink to={item.slug}>{item.title}</NavLink>
                        </li>
                    )
                })}
                <li> <NavLink to='/plakater/drama'>Drama</NavLink></li>
            </ul>
        </nav>
    )
}

export default GenreNav;

