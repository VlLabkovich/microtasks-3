import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
// import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR404: '/*'
} as const

function App() {
    return (
        <S.Header>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={"/page1"}>Page1</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/page2"}>Page2</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/page3"}>Page3</NavLink>
                    </S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={"/*"} element={<Navigate to={PATH.ERROR404}/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </S.Header>
    );
}

export default App;
