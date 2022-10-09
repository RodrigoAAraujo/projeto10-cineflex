import { useState } from "react"
import styled from "styled-components"

export default function SeatsBoard({seats,allSeatsSelected, select}){
    return (
        <SeatsBoardStyle>
            <div>
                {seats.map((s,index)=> <Seat seat={s} key={index} allSeats={allSeatsSelected} select={select}/>)}
            </div>
            <SeatsLegend/>
        </SeatsBoardStyle>
    )
}

function Seat({seat, allSeats, select}){
    const {id, name, isAvailable} = seat
    const [selected, setSelected] = useState(isAvailable)

    function toggleSelection(){
        if (selected === true){
            setSelected("selected")
            select([...allSeats.filter((s) => s.id !== id), {id:id, name: name}])
        }else if(selected==="selected"){
            setSelected(isAvailable)
            select(allSeats.filter((s) => s.id !== id))
        }
    }

    function checkBack (){
        if(selected === true){
            return "#C3CFD9"
        }else if (selected === false){
            return "#FBE192"
        }else{
            return "#1AAE9E"
        }
    }

    function checkBorder(){
        if(selected === true){
            return "#808F9D"
        }else if (selected === false){
            return "#F7C52B"
        }else{
            return "#0E7D71"
        }
    }

    return(
        <SeatStyle data-identifier="seat" 
            checkBackgorund={checkBack} 
            checkBorder={checkBorder} onClick={() => toggleSelection()}
            >
            {name}
        </SeatStyle>
    )
}

function SeatsLegend(){
    return(
        <SeatLegendStyle>
            <div>  
                <button data-identifier="seat-selected-subtitle" className="selected" disabled></button>
                <p>Selecionado</p>
            </div>
            <div>
                <button data-identifier="seat-available-subtitle" className="available" disabled></button>
                <p>Disponível</p>
            </div>
            <div>
                <button data-identifier="seat-unavailable-subtitle" className="unavailable" disabled ></button>
                <p>Indisponível</p>
            </div>

        </SeatLegendStyle>
    )
}



const SeatsBoardStyle = styled.div`
    max-width: 650px;
    margin: 0px auto;
    div{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
`
const SeatStyle = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin: 10px 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: 400;
    color: #000000;
    cursor:pointer;

    background-color: ${props => props.checkBackgorund};
    border: 1px solid ${props => props.checkBorder};
`
const SeatLegendStyle = styled.div`

    div{
        flex-direction: column;
        margin:10px 12px;

        button{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            margin: 10px 6px;
        }
        p{
            font-size: 13px;
            font-weight: 400;
            color:#4E5A65;
        }

        .selected{
            background-color: #1AAE9E;
            border: 1px solid #0E7D71;
        }
        .available{
            background-color: #C3CFD9;
            border: 1px solid #7B8B99;
        }
        .unavailable{
            background-color: #FBE192;
            border: 1px solid #F7C52B;
        }

    }

`