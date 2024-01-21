import {useState, useEffect} from "react";
import API from "../api/main";
import account from "../api/account";
import Alert from "../components/Alert";
import {useNavigate} from "react-router-dom";

function Signup() {
    const navigate = useNavigate()

    const [accountForm, setAccountForm] = useState<Account>({
        email: '',
        password: '',
        profile: {
            name: '',
            phone: '',
            anonymous_name: ''
        }
    })
    const [profileForm, setProfileForm] = useState<Profile>({
        name: '',
        phone: '',
        anonymous_name: ''
    })
    const [inputTouched, setInputTouched] = useState<{
        email: boolean
        password: boolean
        name: boolean
        phone: boolean
        passwordAgain: boolean
    }>({
        email: false,
        password: false,
        name: false,
        phone: false,
        passwordAgain: false
    })

    const [confirmEmail, setConfirmEmail] = useState(false)
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState(false)
    const [confirmPasswordSame, setConfirmPasswordSame] = useState(false)
    const [passwordAgain, setPasswordAgain] = useState('')
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showFailedAlert, setShowFailedAlert] = useState(false)

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
        setConfirmPassword(passwordRegex.test(accountForm.password))
    }, [accountForm.password])
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setConfirmEmail(emailRegex.test(accountForm.email))
    }, [accountForm.email])

    useEffect(() => {
        setConfirmPasswordSame(accountForm.password === passwordAgain)
    }, [passwordAgain])
    useEffect(() => {
        const phoneRegex = /^010\d{8}$/;
        setConfirmPhoneNumber(phoneRegex.test(profileForm.phone || ''));
    }, [profileForm.phone]);
    useEffect(() => {
        if(profileForm){
            setAccountForm({...accountForm, profile: profileForm})
        }
    }, [profileForm]);


    const onClickAnonymousName = async () => {
        const res = await API.account.getRandName()
        if (res.status === 200) {
            setProfileForm({...profileForm, anonymous_name: res.data})
        } else {
            setProfileForm({...profileForm, anonymous_name: ''})
        }
    }

    const onClickSignup = async () => {
        const res = await API.account.createUser(accountForm)
        if (res === 201) {
            setShowSuccessAlert(true);
        }
        else {
            setShowFailedAlert(false)
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
                                               className="block text-md font-bold text-gray-700">
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value={profileForm.name}
                                            onChange={(e) => {
                                                setProfileForm({...profileForm, name: e.target.value})
                                            }}
                                            onBlur={() => {
                                                setInputTouched({...inputTouched, name: true})
                                            }}
                                            placeholder="성함을 입력해주세요"
                                            className={`input input-sm mt-2 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm `}
                                        />
                                    </div>

                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="email-address"
                                               className="block text-md font-bold text-gray-700">
                                            Email 주소*
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            value={accountForm.email}
                                            placeholder="이메일 주소를 입력해주세요. ex) kwj@zwoni.com"
                                            onChange={(e) => {
                                                setAccountForm({...accountForm, email: e.target.value})
                                            }}
                                            onBlur={() => {
                                                setInputTouched({
                                                    ...inputTouched,
                                                    email: accountForm.email === '' ? false : true
                                                })
                                            }}
                                            className={`input input-sm mt-2 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm
                                            ${confirmEmail || !inputTouched.email ? 'border-gray-300 focus:border-orange-500 focus:ring-orange-500' : 'border-red-600 focus:border-red-700 focus:ring-red-500'}
                                            `}
                                        />
                                        <div
                                            className={`text-xs mt-1 pl-2 text-red-600 ${confirmEmail || !inputTouched.email ? 'hidden' : ''}`}>
                                            이메일 형식으로 입력해주세요.
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="email-address"
                                               className="block text-md font-bold text-gray-700">
                                            핸드폰 번호
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            value={profileForm.phone}
                                            placeholder="'-'를 제외하고 입력해주세요"
                                            onChange={(e) => {
                                                setProfileForm({...profileForm, phone: e.target.value})
                                            }}
                                            onBlur={() => {
                                                setInputTouched({
                                                    ...inputTouched,
                                                    phone: profileForm.phone === '' ? false : true
                                                })
                                            }}
                                            className={`input input-sm mt-2 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm
                                            ${confirmPhoneNumber || !inputTouched.phone ? 'border-gray-300 focus:border-orange-500 focus:ring-orange-500' : 'border-red-600 focus:border-red-700 focus:ring-red-500'}
                                            `}
                                        />
                                        <div
                                            className={`text-xs mt-1 pl-2 text-red-600 ${confirmPhoneNumber || !inputTouched.phone ? 'hidden' : ''}`}>
                                            핸드폰 번호 양식이 아닙니다.
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-3 lg:col-span-3">
                                        <label htmlFor="anonymous" className="block text-md font-bold text-gray-700">
                                            익명 이름*
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="anonymous"
                                                id="anonymous"
                                                autoComplete="address-level2"
                                                value={profileForm.anonymous_name}
                                                disabled={true}
                                                className="disabled:border-gray-300 input input-sm mt-2 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                            />
                                            <button
                                                className="btn mt-2 btn-sm inline-flex justify-center border border-transparent bg-orange-600 px-4 text-sm font-small text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                type="button"
                                                onClick={onClickAnonymousName}
                                            >
                                                {profileForm.anonymous_name === '' ? "이름 생성" : "다른 이름..."}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="password"
                                               className="block text-md font-bold  text-gray-700">
                                            비밀번호*
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            value={accountForm.password}
                                            placeholder="영문+숫자+특수문자 조합으로 10자 이상 입력해주세요."
                                            onChange={(e) => {
                                                setAccountForm({...accountForm, password: e.target.value})
                                            }}
                                            onBlur={() => {
                                                setInputTouched({
                                                    ...inputTouched,
                                                    password: accountForm.password === '' ? false : true
                                                })
                                            }}
                                            className={`input input-sm mt-2 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm
                                            ${confirmPassword || !inputTouched.password ? 'border-gray-300 focus:border-orange-500 focus:ring-orange-500' : 'border-red-600 focus:border-red-700 focus:ring-red-500'}
                                            `}
                                        />
                                        <div
                                            className={`text-xs mt-1 pl-2 text-red-600 ${confirmPassword || !inputTouched.password ? 'hidden' : ''}`}>
                                            <p>비밀번호 형식이 알맞지 않습니다.</p>영문+숫자+특수문자 조합으로 10자 이상 입력해주세요.
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="password-again"
                                               className="block text-md font-bold  text-gray-700">
                                            비밀번호 확인*
                                        </label>
                                        <input
                                            type="password"
                                            name="password-again"
                                            id="password-again"
                                            autoComplete="password-again"
                                            value={passwordAgain}
                                            placeholder="입력한 비밀번호와 동일하게 입력해주세요."
                                            onChange={(e) => {
                                                setPasswordAgain(e.target.value)
                                            }}
                                            onBlur={() => {
                                                setInputTouched({
                                                    ...inputTouched,
                                                    passwordAgain: passwordAgain === '' ? false : true
                                                })
                                            }}
                                            className={`input input-sm mt-2 block w-full  border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm
                                            ${confirmPasswordSame || !inputTouched.passwordAgain ? 'border-gray-300 focus:border-orange-500 focus:ring-orange-500' : 'border-red-600 focus:border-red-700 focus:ring-red-500'}
                                            `}
                                        />
                                        <div
                                            className={`text-xs mt-1 pl-2 text-red-600 ${confirmPasswordSame || !inputTouched.passwordAgain ? 'hidden' : ''}`}>
                                            입력한 비밀번호와 일치하지 않습니다.
                                        </div>
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
                                    className="btn inline-flex justify-center border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700
                                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                                    "
                                    onClick={onClickSignup}
                                    disabled={
                                        !(confirmEmail&&confirmPassword&&confirmPasswordSame&&profileForm.anonymous_name!=='')
                                    }
                                >
                                    회원가입하기
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Alert message={"회원가입이 완료되었습니다."} onConfirm={() => {
                setShowSuccessAlert(false)
                navigate('/login')
            }} show={showSuccessAlert}/>
            <Alert message={"회원가입이 실패했습니다. 다시 시도해주세요."} onConfirm={() => {
                setShowFailedAlert(false)
                navigate('/login')
            }} show={showFailedAlert}/>
        </>
    )
}

export default Signup