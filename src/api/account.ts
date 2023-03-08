import axios from "axios";

const account = {
    login: async (data: LoginRequest): Promise<LoginResponse> => {
        const response = await axios.post<LoginResponse>('/account/login/', data);
        return response.data
    },
    userList: async (): Promise<getAccountListResponse> => {
        const response = await axios.get<getAccountListResponse>('account/user/');
        return response.data
    },
    userInfo: async (id: number): Promise<getAccountInfoResponse> => {
        const response = await axios.get<getAccountInfoResponse>(`account/user/${id}/`)
        return response.data
    },
    createUser: async (data: Account): Promise<getAccountInfoResponse> => {
        const response = await axios.post<getAccountInfoResponse>('account/user/', data)
        return response.data
    },
    updateUser: async (data: Account): Promise<getAccountInfoResponse> => {
        const response = await axios.put<getAccountInfoResponse>('account/user/', data)
        return response.data
    },
    deleteUser: async (id:number): Promise<null> => {
        const response = await axios.delete<null>(`account/user/${id}/`)
        return response.data
    },
    changePassword: async (id:number, data:ChangePasswordRequest): Promise<getChangePasswordResponse> => {
        const response = await axios.post<getChangePasswordResponse>(`account/user/${id}/change-password/`,data)
        return response.data
    },
    getRandName: async (id:number): Promise<getRandNameResponse> => {
        const response = await axios.get<getRandNameResponse>(`account/user/${id}/get-rand-name/`)
        return response.data
    }

}


export default account;