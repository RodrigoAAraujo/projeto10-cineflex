import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

import LoadingPage from "./LoadingPage"
import SeatsBoard from "../components/SeatsBoard"
import Footer from "../components/Footer"
import FormSeats from "../components/Form"

export default function SeatsPage(){
    const [seats, setSeats] = useState(null)
    const sessionId = useParams()
    const[seatsSelected, setSeatsSelected] = useState([])
    const navigate = useNavigate()


    useEffect(()=> {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.sessionId}/seats`
        axios.get(URL)
            .then(res => {
                setSeats(res.data)
                console.log(res.data)
            })
            .catch(err =>{
            })
    }, [])

    function postInfo(e, body){
        e.preventDefault()
        navigate("/sucesso", {state: {customers: body,seatsNumber:seatsSelected.map((s) => s.name), session:seats}})
    }
    
    if(seats === null){
        return <LoadingPage/>
    }
    else{
        return(
            <SeatsPageStyle>
                <h2>Selecione o(s) assento(s)</h2>

                <SeatsBoard seats={seats.seats} allSeatsSelected={seatsSelected} select={setSeatsSelected}/>

                {(seatsSelected.length > 0)? 
                    <FormSeats postInfo={postInfo} seatsSelected={seatsSelected}/>:
                    null
                }

                <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} day={seats.day.weekday} time ={seats.name}/>
            </SeatsPageStyle>
        )
    }
}

const SeatsPageStyle = styled.div`
    width: 95%;
    margin: 10px auto 130px;

    h2{
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin:28px 0px;
        letter-spacing: 0.08em;
    }
`