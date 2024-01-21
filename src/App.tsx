import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import WoochelinMap from './pages/WoochelinMap'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Main from "./pages/Main"
import {
    RecoilRoot, useRecoilState,
} from "recoil";
import icon from './assets/images/woochelin.svg'
import secureLocalStorage from "react-secure-storage";
import {accessTokenState} from "./store/common";
function App() {
    return (
        <RecoilRoot>
            <>
                <main className="bg-[#fff0e0] h-screen overflow-hidden">
                    <NavBar/>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/signup' element={<Signup />} />
                            <Route path='/map' element={<WoochelinMap />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/' element={<Main/>}/>
                        </Routes>
                    </BrowserRouter>
                </main>
            </>
        </RecoilRoot>
    );
}

export default App;