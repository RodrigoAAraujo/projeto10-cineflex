import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import LoadingPage from "./LoadingPage"
import Footer from "../components/Footer"
import Session from "../components/Session"


export default function SessionsPage(){
    const [sessions, setSessions] = useState(null)
    const movieId = useParams()

    useEffect(()=>{
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId.movieId}/showtimes`
        axios.get(URL)
            .then(res =>{ 
                setSessions(res.data)
                console.log(res.data.days)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])
    
    if (sessions === null){
        return <LoadingPage/>
    }
    else{
        return (
            <SessionsPageStyle>
                <h2>Selecione o filme</h2>
                <div>
                    {sessions.days.map((d) => <Session daySessions={d}/>)}
                </div>
                <Footer posterURL={sessions.posterURL} title={sessions.title}/>
            </SessionsPageStyle>
        )
    }
}

const SessionsPageStyle = styled.main`

`