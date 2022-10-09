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
            })
            .catch(err =>{
            })
    },[])
    
    if (sessions === null){
        return <LoadingPage/>
    }
    else{
        return (
            <SessionsPageStyle>
                <h2>Selecione o horário</h2>
                <div>
                    {sessions.days.map((d) => <Session daySessions={d}/>)}
                </div>
                <Footer posterURL={sessions.posterURL} title={sessions.title}/>
            </SessionsPageStyle>
        )
    }
}

const SessionsPageStyle = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom:137px;

    h2{
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin:28px 0px;
        letter-spacing: 0.08em;
    }
`