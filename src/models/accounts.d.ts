
interface Profile{
    name:string
    phone?:string
    userId?:number
    anonymous_name:string
}

interface Account{
    id?:number
    team_id?: string
    isAcctive?:boolean
    isAdmin?:boolean
    password:string
    email:string
    profile:Profile
}

interface LoginRequest{
    email:string
    password:string
}

interface ChangePasswordRequest{
    password_one:string
    password_two:string
}


interface LoginResponse {
    accessToken: string
    refreshToken: string
    email: string;
    id:number;
}



