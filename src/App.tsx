import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Adidas} from "./components/pages/sneakers/Adidas";
import {Puma} from "./components/pages/sneakers/Puma";
import {Abibas} from "./components/pages/sneakers/Abibas";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {AdidasModel} from "./components/pages/sneakers/adidas/AdidasModel";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/adidas/:id',
    ERROR404: '/*'
} as const

function App() {
    return (
        <S.Header>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={"/adidas"}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/puma"}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/abibas"}>Abibas</NavLink>
                    </S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>

                        <Route path={PATH.PAGE4} element={<AdidasModel/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>

                        {/*<Route path={'/adidas/*'} element={<Error404/>}/>*/}
                        {/*<Route path={"/*"} element={<Navigate to={PATH.ERROR404}/>}/>*/}
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </S.Header>
    );
}

export default App;
