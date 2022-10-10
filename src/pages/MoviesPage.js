import axios from "axios"

import styled from "styled-components"
import { useEffect, useState } from "react"

import Movie from "../components/Movie"
import LoadingPage from "./LoadingPage"
import { useNavigate } from "react-router-dom"


export default function MoviesPage(){
    const navigate = useNavigate()
    const [Movies, setMovies] = useState(null)

    useEffect(()=> {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        axios.get(URL)
            .then(res =>{
                setMovies(res.data)
            })
            .catch(() =>{
                navigate("/erro")
            })

    }, [])

    if(Movies === null){
        return <LoadingPage/>
    }
    else{
        return (
            <MoviesPageStyle>
                <h2>Selecione o filme</h2>
                <div>
                    {Movies.map((m)=> <Movie id ={m.id} title={m.title} posterURL={m.posterURL}/>)}
                </div>
            </MoviesPageStyle>
        )
    }
}

const MoviesPageStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin:28px 0px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
    }
`

