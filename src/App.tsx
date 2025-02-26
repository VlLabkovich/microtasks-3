import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {S} from "./components/pages/_styles"


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/nike',
    PRICES: '/prices',
    // PAGE5: '/adidas/:id/:brand',
    // PAGE6: '/puma/:id/:brand',
    // PAGE7: '/nike/:id/:brand',
    // ERROR404: '/*'
} as const

function App() {
    return (
        <S.Header>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Nike</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
                </S.Nav>
                <S.Content>

                    <Outlet/>

                    {/*<Routes>*/}
                    {/*    <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Nike/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/}

                    {/*    <Route path={PATH.PAGE5} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.PAGE6} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.PAGE7} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.ERROR404} element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </S.Header>
    );
}

export default App;
