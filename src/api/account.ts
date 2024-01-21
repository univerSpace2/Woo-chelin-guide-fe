import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../store/common";

const BASE_URL = import.meta.env.VITE_APP_BACKEND_API_HOST
const BASE_USER_URL = `${import.meta.env.VITE_APP_BACKEND_API_HOST}/accounts/users/`


const account = {
    login: async (data: LoginRequest): Promise<number> => {
        const response = await axios.post<LoginResponse>(`${BASE_URL}/login/`, data);
        if (response.status === 200) {
            secureLocalStorage.setItem('access_token', response.data.accessToken)
            secureLocalStorage.setItem('refresh_token', response.data.refreshToken)
        }
        return response.status

    },
    userList: async (): Promise<Account[]> => {
        const response = await axios.get<Account[]>(`${BASE_USER_URL}`);
        return response.data
    },
    userInfo: async (id: number): Promise<Account | null> => {
        const response = await axios.get<Account>(`${BASE_USER_URL}${id}/`)
        if(response.status >= 200 && response.status <300){
            return response.data
        }
        else{
            return null
        }
    },
    createUser: async (data: Account): Promise<number> => {
        const response = await axios.post(`${BASE_USER_URL}`, data)
        return response.status
    },
    updateUser: async (data: Account): Promise<number> => {
        const response = await axios.put(`${BASE_USER_URL}`, data)
        return response.status
    },
    deleteUser: async (id:number): Promise<null> => {
        const response = await axios.delete<null>(`${BASE_USER_URL}${id}/`)
        return response.data
    },
    changePassword: async (id:number, data:ChangePasswordRequest): Promise<number> => {
        const response = await axios.post(`${BASE_USER_URL}${id}/change-password/`,data)
        return response.status
    },
    getRandName: async (): Promise<any> => {
        const response = await axios.get<string>(`${BASE_USER_URL}anonymous-name/`)
        return response
    }

}


export default account;