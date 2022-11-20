import React from "react";
import {IoFastFoodOutline} from "react-icons/io5";

function Login() {
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
                                    {/*<span>이메일 주소</span>*/}
                                    <input type="text" placeholder="이메일 주소" className="input input-bordered"/>
                                    {/*<span>비밀번호 </span>*/}
                                    <input type="password" placeholder="비밀번호" className="input input-bordered"/>
                                </label>
                            </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="checkbox h-4 w-4 border-gray-300 checkbox-warning	"
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
                                        ()=>{window.location.href="/"}
                                    }
                                >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/*<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />*/}
                </span>
                                    로그인 하기
                                </button>
                            </div>
                        </form>
                {/*        <form className="mt-8 space-y-6" action="#" method="POST">*/}
                {/*            <input type="hidden" name="remember" defaultValue="true"/>*/}
                {/*            <div className="-space-y-px rounded-md shadow-sm">*/}
                {/*                <div>*/}
                {/*                    <label htmlFor="email-address" className="sr-only">*/}
                {/*                        Email address*/}
                {/*                    </label>*/}
                {/*                    <input*/}
                {/*                        id="email-address"*/}
                {/*                        name="email"*/}
                {/*                        type="email"*/}
                {/*                        autoComplete="email"*/}
                {/*                        required*/}
                {/*                        className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"*/}
                {/*                        placeholder="이메일 주소"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <label htmlFor="password" className="sr-only">*/}
                {/*                        Password*/}
                {/*                    </label>*/}
                {/*                    <input*/}
                {/*                        id="password"*/}
                {/*                        name="password"*/}
                {/*                        type="password"*/}
                {/*                        autoComplete="current-password"*/}
                {/*                        required*/}
                {/*                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"*/}
                {/*                        placeholder="비밀번호"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="flex items-center justify-between">*/}
                {/*                <div className="flex items-center">*/}
                {/*                    <input*/}
                {/*                        id="remember-me"*/}
                {/*                        name="remember-me"*/}
                {/*                        type="checkbox"*/}
                {/*                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
                {/*                    />*/}
                {/*                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">*/}
                {/*                        로그인 정보 기억하기*/}
                {/*                    </label>*/}
                {/*                </div>*/}

                {/*                <div className="text-sm">*/}
                {/*                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                {/*                        설~마 비밀번호를 까먹었나요?*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <button*/}
                {/*                    type="submit"*/}
                {/*                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"*/}
                {/*                >*/}
                {/*<span className="absolute inset-y-0 left-0 flex items-center pl-3">*/}
                {/*  /!*<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />*!/*/}
                {/*</span>*/}
                {/*                    로그인 하기*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login