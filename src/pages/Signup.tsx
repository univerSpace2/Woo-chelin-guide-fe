import React from "react";
import {useState, useEffect} from "react";
import API from "../api/main";
import account from "../api/account";
import Alert from "../components/Alert";

function Signup() {
    const [accountForm,setAccountForm] = useState<Account>({
        email:'',
        password:'',
        profile:{
            name:'',
            eng_name:'',
            phone:'',
            anonymous_name:''
        }
    })
    const [profileForm,setProfileForm] = useState<Profile>({
        name:'',
        eng_name:'',
        phone:'',
        anonymous_name:''
    })
    const [confirmEmail,setConfirmEmail] = useState(false)
    const [confirmPassword,setConfirmPassword] = useState(false)
    const [confirmPasswordSame,setConfirmPasswordSame] = useState(false)
    const validatePassword = (password:string): boolean => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
        return regex.test(password);
    }
    const validateEmail = (email:string): boolean =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const validatePasswordSame = (password2:string) => {
        return accountForm.password === password2
    }

    const [passwordAgain, setPasswordAgain] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const onClickAnonymousName = async () =>{
        const res = await API.account.getRandName()
        if(res.status_code===200){
            setProfileForm({...profileForm,anonymous_name:res.result.anonymous_name})
        }
        else{
            setProfileForm({...profileForm,anonymous_name:''})
        }
    }

    return (
        <>
            <div className="flex min-h-[80%] items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="card w-[40%] bg-base-100 shadow-xl px-6 py-12">
                    <form action="#" method="POST">
                        <div className="overflow-hidden  sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="name"
                                               className="block text-sm font-medium text-gray-700">
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value={profileForm.name}
                                            onChange={(e)=>{
                                                setProfileForm({...profileForm,name:e.target.value})
                                            }}
                                            className="input input-sm mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="eng-name"
                                               className="block text-sm font-medium text-gray-700">
                                            영어이름
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="eng-name"
                                            autoComplete="eng-name"
                                            value={profileForm.eng_name}
                                            onChange={(e)=>{
                                                setProfileForm({...profileForm,eng_name:e.target.value})
                                            }}
                                            className="input input-sm mt-1 block w-full  border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address"
                                               className="block text-sm font-medium text-gray-700">
                                            Email 주소
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            value={accountForm.email}
                                            onChange={(e)=>{
                                                setAccountForm({...accountForm,email:e.target.value})
                                                setConfirmEmail(validateEmail(e.target.value))
                                            }}
                                            className="input input-sm mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="team"
                                               className="block text-sm font-medium text-gray-700">
                                            소속 본부
                                        </label>
                                        <select
                                            id="team"
                                            name="team"
                                            autoComplete="team-name"
                                            className="input mt-1 block w-full  border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                                        >
                                            <option>AI기술연구소</option>
                                            <option>컨설팅본부</option>
                                            <option>경영관리본부</option>
                                            <option>교육본부</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label htmlFor="anonymous" className="block text-sm font-medium text-gray-700">
                                            익명 이름
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="anonymous"
                                                id="anonymous"
                                                autoComplete="address-level2"
                                                value={profileForm.anonymous_name}
                                                disabled={true}
                                                className="disabled:border-gray-300 input input-sm mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                            />
                                            <button className="btn mt-1 btn-sm inline-flex justify-center border border-transparent bg-orange-600 px-4 text-sm font-small text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" 
                                                    type="button"
                                                    onClick={onClickAnonymousName}
                                            >
                                                {profileForm.anonymous_name === '' ? "이름 생성": "다른 이름..."}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-3"/>
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium text-gray-700">
                                            비밀번호
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            value={accountForm.password}
                                            onChange={(e)=>{
                                                setAccountForm({...accountForm,password:e.target.value})
                                                setConfirmPassword(validatePassword(e.target.value))
                                            }}
                                            className="input input-sm mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="password-again"
                                               className="block text-sm font-medium text-gray-700">
                                            비밀번호 확인
                                        </label>
                                        <input
                                            type="password"
                                            name="password-again"
                                            id="password-again"
                                            autoComplete="password-again"
                                            value={passwordAgain}
                                            onChange={(e)=>{
                                                setPasswordAgain(e.target.value)
                                                setConfirmPasswordSame(validatePasswordSame(e.target.value))
                                            }}
                                            className="input input-sm mt-1 block w-full  border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 text-right sm:px-6">
                                <button
                                    type="button"
                                    className="btn inline-flex mr-3 justify-center border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    // onClick={()=>{window.location.href = "/login"}}
                                >
                                    뒤로 가기
                                </button>
                                <button
                                    type="button"
                                    className="btn inline-flex justify-center border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    onClick={()=>{setShowAlert(true)}}
                                    // onClick={()=>{window.location.href = "/login"}}
                                >
                                    회원가입하기
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Alert message={"로그인을 진행하시겠습니까?"} onConfirm={()=>{
                setAccountForm({...accountForm,profile:profileForm})
                setShowAlert(false)}} show={showAlert}/>
        </>
    )
}

export default Signup