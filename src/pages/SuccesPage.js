import { useLocation, useParams } from "react-router-dom"

export default function SuccessPage(){

    const SuccessInfo = useLocation()

    console.log(SuccessInfo)
    return null
}