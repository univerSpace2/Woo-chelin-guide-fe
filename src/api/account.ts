import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BACKEND_API_HOST

const account = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
        const response = await axios.post<LoginResponse>(`${BASE_URL}/account/login/`, data);
        return response.data
    },
    userList: async (): Promise<getAccountListResponse> => {
        const response = await axios.get<getAccountListResponse>(`${BASE_URL}/account/user/`);
        return response.data
    },
    userInfo: async (id: number): Promise<getAccountInfoResponse> => {
        const response = await axios.get<getAccountInfoResponse>(`${BASE_URL}/account/user/${id}/`)
        return response.data
    },
    createUser: async (data: Account): Promise<getAccountInfoResponse> => {
        const response = await axios.post<getAccountInfoResponse>('${BASE_URL}/account/user/', data)
        return response.data
    },
    updateUser: async (data: Account): Promise<getAccountInfoResponse> => {
        const response = await axios.put<getAccountInfoResponse>('${BASE_URL}/account/user/', data)
        return response.data
    },
    deleteUser: async (id:number): Promise<null> => {
        const response = await axios.delete<null>(`${BASE_URL}/account/user/${id}/`)
        return response.data
    },
    changePassword: async (id:number, data:ChangePasswordRequest): Promise<getChangePasswordResponse> => {
        const response = await axios.post<getChangePasswordResponse>(`${BASE_URL}/account/user/${id}/change-password/`,data)
        return response.data
    },
    getRandName: async (): Promise<getRandNameResponse> => {
        const response = await axios.get<getRandNameResponse>(`${BASE_URL}/account/user/get-rand-name/`)
        return response.data
    }

}


export default account;