import React from "react";

function Signup() {
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

                                    {/*<div className="col-span-6">*/}
                                    {/*    <label htmlFor="street-address"*/}
                                    {/*           className="block text-sm font-medium text-gray-700">*/}
                                    {/*        Street address*/}
                                    {/*    </label>*/}
                                    {/*    <input*/}
                                    {/*        type="text"*/}
                                    {/*        name="street-address"*/}
                                    {/*        id="street-address"*/}
                                    {/*        autoComplete="street-address"*/}
                                    {/*        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                                    {/*    />*/}
                                    {/*</div>*/}

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
                                                className="input input-sm mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                            />
                                            <button className="btn mt-1 btn-sm inline-flex justify-center border border-transparent bg-orange-600 px-4 text-sm font-small text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" 
                                                    type="button"
                                                    onClick={()=>{console.log("랜덤이름")}}
                                            >
                                                다른이름..
                                            </button>
                                        </div>
                                    </div>

                                    {/*<div className="col-span-6 sm:col-span-3 lg:col-span-2">*/}
                                    {/*    <label htmlFor="region" className="block text-sm font-medium text-gray-700">*/}
                                    {/*        State / Province*/}
                                    {/*    </label>*/}
                                    {/*    <input*/}
                                    {/*        type="text"*/}
                                    {/*        name="region"*/}
                                    {/*        id="region"*/}
                                    {/*        autoComplete="address-level1"*/}
                                    {/*        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                                    {/*    />*/}
                                    {/*</div>*/}

                                    {/*<div className="col-span-6 sm:col-span-3 lg:col-span-2">*/}
                                    {/*    <label htmlFor="postal-code"*/}
                                    {/*           className="block text-sm font-medium text-gray-700">*/}
                                    {/*        ZIP / Postal code*/}
                                    {/*    </label>*/}
                                    {/*    <input*/}
                                    {/*        type="text"*/}
                                    {/*        name="postal-code"*/}
                                    {/*        id="postal-code"*/}
                                    {/*        autoComplete="postal-code"*/}
                                    {/*        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="px-4 py-3 text-right sm:px-6">
                                <button
                                    type="button"
                                    className="btn inline-flex justify-center border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    onClick={()=>{window.location.href = "/login"}}
                                >
                                    뒤로 가기
                                </button>
                                <button
                                    type="button"
                                    className="btn inline-flex justify-center border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    onClick={()=>{window.location.href = "/login"}}
                                >
                                    회원가입하기
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/*<div className="mt-10 sm:mt-0">*/}
                {/*    <div className="mt-5 md:col-span-2 md:mt-0">*/}
                {/*        <form action="#" method="POST">*/}
                {/*            <div className="overflow-hidden shadow sm:rounded-md">*/}
                {/*                <div className="bg-white px-4 py-5 sm:p-6">*/}
                {/*                    <div className="grid grid-cols-6 gap-6">*/}
                {/*                        <div className="col-span-6 sm:col-span-3">*/}
                {/*                            <label htmlFor="first-name"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                First name*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="first-name"*/}
                {/*                                id="first-name"*/}
                {/*                                autoComplete="given-name"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-3">*/}
                {/*                            <label htmlFor="last-name"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                Last name*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="last-name"*/}
                {/*                                id="last-name"*/}
                {/*                                autoComplete="family-name"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-4">*/}
                {/*                            <label htmlFor="email-address"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                Email address*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="email-address"*/}
                {/*                                id="email-address"*/}
                {/*                                autoComplete="email"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-3">*/}
                {/*                            <label htmlFor="country"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                Country*/}
                {/*                            </label>*/}
                {/*                            <select*/}
                {/*                                id="country"*/}
                {/*                                name="country"*/}
                {/*                                autoComplete="country-name"*/}
                {/*                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"*/}
                {/*                            >*/}
                {/*                                <option>United States</option>*/}
                {/*                                <option>Canada</option>*/}
                {/*                                <option>Mexico</option>*/}
                {/*                            </select>*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6">*/}
                {/*                            <label htmlFor="street-address"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                Street address*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="street-address"*/}
                {/*                                id="street-address"*/}
                {/*                                autoComplete="street-address"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">*/}
                {/*                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">*/}
                {/*                                City*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="city"*/}
                {/*                                id="city"*/}
                {/*                                autoComplete="address-level2"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">*/}
                {/*                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">*/}
                {/*                                State / Province*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="region"*/}
                {/*                                id="region"*/}
                {/*                                autoComplete="address-level1"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}

                {/*                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">*/}
                {/*                            <label htmlFor="postal-code"*/}
                {/*                                   className="block text-sm font-medium text-gray-700">*/}
                {/*                                ZIP / Postal code*/}
                {/*                            </label>*/}
                {/*                            <input*/}
                {/*                                type="text"*/}
                {/*                                name="postal-code"*/}
                {/*                                id="postal-code"*/}
                {/*                                autoComplete="postal-code"*/}
                {/*                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"*/}
                {/*                            />*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">*/}
                {/*                    <button*/}
                {/*                        type="submit"*/}
                {/*                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"*/}
                {/*                    >*/}
                {/*                        Save*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Signup