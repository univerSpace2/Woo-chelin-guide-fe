import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from "recoil";

function App() {
    return (
        <RecoilRoot>
            <>
                <main className="bg-[#fff0e0] h-screen overflow-hidden">
                    {/*<button className="btn">메뉴</button>*/}
                    <div className="navbar bg-orange-200 drop-shadow-md">
                        <a className="btn btn-ghost normal-case text-xl" href="/">맛집지도</a>
                        <a className="btn btn-ghost normal-case text-xl" href="/login">로그인</a>
                        <a className="btn btn-ghost normal-case text-xl" href="/signup">회원가입</a>
                    </div>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/signup' element={<Signup />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            {/*<Route element={<NotFound />} />*/}
                        </Routes>
                    </BrowserRouter>
                </main>
            </>
        </RecoilRoot>
    );
}

export default App;