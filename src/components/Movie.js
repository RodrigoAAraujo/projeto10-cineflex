import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movie({ id, title, posterURL }) {
    return (
        <MovieStyle data-identifier="movie-outdoor">
            <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt={title} />
            </Link>
        </MovieStyle>
    )
}

const MovieStyle = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 9px 20px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`