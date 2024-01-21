import {IoFastFoodOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import API from "../api/main";
import secureLocalStorage from "react-secure-storage";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../store/common";

function Login() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<LoginRequest>({
        email: '',
        password: '',
    })
    const [isFailedLogin, setIsFailedLogin] = useState<boolean>(false);
    const [rememberInfo, setRememberInfo] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    const onClickLogin = async () => {
        if(loginForm.email && loginForm.password){
            const response = await API.account.login(loginForm);
            if (response === 200) {
                if(rememberInfo){
                    secureLocalStorage.setItem("email", loginForm.email);
                    secureLocalStorage.setItem("password", loginForm.password);
                    secureLocalStorage.setItem("rememberInfo", "true");
                }else{
                    secureLocalStorage.removeItem("email");
                    secureLocalStorage.removeItem("password");
                    secureLocalStorage.setItem("rememberInfo", "false");
                }
                setAccessToken(secureLocalStorage.getItem("access_token") as string)
                navigate('/map');
            }
            else{
                setIsFailedLogin(true);
            }
        }

    }
    // useEffect(() => {
    //     if (rememberInfo) {
    //         secureLocalStorage.setItem('email', loginForm.email);
    //         secureLocalStorage.setItem('password', loginForm.password);
    //         secureLocalStorage.setItem('rememberInfo', "true");
    //     }
    //     else{
    //         secureLocalStorage.removeItem('email');
    //         secureLocalStorage.removeItem('password');
    //         secureLocalStorage.setItem('rememberInfo', "false");
    //     }
    // }, [rememberInfo, loginForm]);

    useEffect(() => {
        if(secureLocalStorage.getItem("rememberInfo") === "true"){
            setLoginForm({
                email: secureLocalStorage.getItem('email') as string || '',
                password: secureLocalStorage.getItem('password') as string || '',
            })
            setRememberInfo(true);
        }
        else{
            setRememberInfo(false);
        }
    }, []);

    return (
        <>
            <div className="flex min-h-[80%] items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="card w-120 bg-base-100 shadow-xl px-6 py-12">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <IoFastFoodOutline
                                className="mx-auto h-12 w-auto fill-red-600	"
                            />
                            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                                우슐랭의 더 다양한 기능을 이용하세요
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                <a href="#" className="font-medium text-orange-600 hover:text-indigo-500">
                                    계정이 아직 없으신가요?
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <div className="form-control">
                                <label className="input-group input-group-vertical">
                                    <input type="text" placeholder="이메일 주소" className="input input-bordered"
                                    onChange={(e)=>{
                                        setLoginForm({
                                            ...loginForm,
                                            email: e.target.value
                                        })
                                    }}
                                    value={loginForm.email}
                                    />
                                    <input type="password" placeholder="비밀번호" className="input input-bordered"
                                    onChange={(e)=> {
                                        setLoginForm({
                                            ...loginForm,
                                            password: e.target.value
                                        })
                                    }}
                                    value={loginForm.password}
                                    />
                                </label>
                            </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="checkbox h-4 w-4 border-gray-300 checkbox-warning"
                                                    checked={rememberInfo}
                                                    onChange={(e)=>{
                                                        setRememberInfo(e.target.checked)
                                                    }}
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    로그인 정보 기억하기
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-orange-600 hover:text-indigo-500">
                                                    설~마 비밀번호를 까먹었나요?
                                                </a>
                                            </div>
                                        </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn glass group flex w-full justify-center border border-transparent bg-orange-600 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    onClick={
                                        onClickLogin
                                    }
                                >
                                    로그인 하기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login