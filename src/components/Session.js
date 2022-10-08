import styled from "styled-components"

export default function Session({daySessions}){

    const {date,id,showtimes,weekday} = daySessions

    return (
        <SessionStyle>
            <h3>{weekday} - {date}</h3>



        </SessionStyle>
    )
}

function SessionButton(){

    
}


const SessionStyle = styled.div`


`