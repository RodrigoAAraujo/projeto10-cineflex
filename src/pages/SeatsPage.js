import axios from "axios"
import { useEffect, useState } from "react"
import { Form, useParams } from "react-router-dom"
import styled from "styled-components"

import LoadingPage from "./LoadingPage"
import SeatsBoard from "../components/SeatsBoard"
import Footer from "../components/Footer"
import FormSeats from "../components/Form"

export default function SeatsPage(){
    const [seats, setSeats] = useState(null)
    const sessionId = useParams()
    const[seatsSelected, setSeatsSelected] = useState([])

    const [nameInput, setNameInput] = useState("")
    const [cpfInput, setCpfInput] = useState("")

    useEffect(()=> {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.sessionId}/seats`
        axios.get(URL)
            .then(res => {
                setSeats(res.data)
            })
            .catch(err =>{
            })
    }, [])

    function postInfo(){
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const body =
        {
            ids: seatsSelected, 
            compradores: [
                { idAssento: 1, nome: "Fulano", cpf: "12345678900" },
                { idAssento: 2, nome: "Fulano 2", cpf: "12345678901" },
                { idAssento: 3, nome: "Fulano 3", cpf: "12345678902" },
            ]
        }

        axios.post(URL, body)
    }
    
    if(seats === null){
        return <LoadingPage/>
    }
    else{
        return(
            <SeatsPageStyle>
                <h2>Selecione o(s) assento(s)</h2>

                <SeatsBoard seats={seats.seats} allSeats={seatsSelected} select={setSeatsSelected}/>

                <Form postInfo={postInfo} seatsSelected={seatsSelected}/>
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

    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        button{

            margin-top: 50px;

            width: 225px;
            height: 42px;

            align-self: center;
            background-color: #E8833A;
            color: #ffffff;
            border-radius: 3px;
            margin-right: 8px;
            font-size: 18px;
            font-weight: 400;

            cursor: pointer;
        }

        label{
            margin: 8px;
            font-size: 18px;
            font-weight: 400;
        }

        input{
            width: 100%;
            padding: 10px;
            border-radius: 3px;
            outline: none;
            border:1px solid #D4D4D4;

           
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;

        }
    }


`