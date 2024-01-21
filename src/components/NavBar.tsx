import icon from "../assets/images/woochelin.svg";
import secureLocalStorage from "react-secure-storage";
import {useRecoilState} from "recoil";
import {useEffect, useState} from "react";
import {accessTokenState} from "../store/common";


const NavBar = () => {
    const [logined, setLogined] = useState(false)
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    useEffect(() => {
        if(accessToken){
            setLogined(true)
        }
    }, [accessToken]);

    return (
        <div className="navbar bg-orange-200 drop-shadow-md">
            <img src={icon} className="w-16 h-16" alt="icon"/>
            {logined ? (<>
                <a className="btn btn-ghost normal-case text-xl" href="/">맛집지도</a>
                <a className="btn btn-ghost normal-case text-xl"
                   onClick={()=>{
                       secureLocalStorage.removeItem('access_token')
                       secureLocalStorage.removeItem('refresh_token')
                       setLogined(false)
                   }}
                >로그아웃</a>
            </>) : <>
                <span className="text-xl normal-case font-bold">Woochelin Guide</span>
                {/*<a className="btn btn-ghost normal-case text-xl" href="/login">로그인</a>*/}
                {/*<a className="btn btn-ghost normal-case text-xl" href="/signup">회원가입</a>*/}
            </>}
        </div>
    )
}

export default NavBar