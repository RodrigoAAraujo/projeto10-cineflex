import { useState } from "react"
import styled from "styled-components"

export default function SeatsBoard({seats, select}){
    return (
        <SeatsBoardStyle>
            {seats.map((s,index)=> <Seat seat={s} key={index} allSeats={seats} select={select}/>)}
        </SeatsBoardStyle>
    )
}

function Seat({seat, allSeats, select}){
    console.log(allSeats)
    const {id, name, isAvailable} = seat
    const [selected, setSelected] = useState(isAvailable)

    function toggleSelection(){
        if (selected === false || selected === true){
            setSelected("selected")
            select([...allSeats.filter((s) => s.id !== id), {id:id, name: name}])
        }else{
            setSelected(isAvailable)
            select(allSeats.filter((s) => s !== id))

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
        <SeatStyle checkBackgorund={checkBack} checkBorder={checkBorder} onClick={() => toggleSelection()}>
            {name}
        </SeatStyle>
    )


}

const SeatsBoardStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
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

    background-color: ${props => props.checkBackgorund};
    border: 1px solid ${props => props.checkBorder};
`