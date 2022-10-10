import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../GlobalStyle"

import MoviesPage from "../pages/MoviesPage"
import SessionsPage from "../pages/SessionsPage"
import SeatsPage from "../pages/SeatsPage"
import SuccessPage from "../pages/SuccesPage"
import Header from "./Header"
import ErrorPage from "../pages/ErrorPage"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<MoviesPage/>} />
                <Route path="/sessoes/:movieId" element={<SessionsPage/>}/>
                <Route path="/assentos/:sessionId" element={<SeatsPage/>}/>
                <Route path="/sucesso" element={<SuccessPage/>}/>
                <Route path="/erro" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}