
interface Profile{
    name:string
    eng_name:string
    phone?:string
    user_id?:number
    anonymous_name:string
}

interface Account{
    id?:number
    team_id?: string
    is_active?:boolean
    is_admin?:boolean
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

interface getAccountInfoResponse extends ObjectResponse<Account>{
    result: Account;
}

interface getAccountListResponse extends ListResponse<Account[]>{
    result: Account[];
}

interface getRandNameResponse extends ObjectResponse<{anonymous_name:string}>{
    result:{anonymous_name:string}
}

interface getChangePasswordResponse extends ObjectResponse<{msg:string}>{
    result:{msg:string}
}

interface LoginResponse extends ObjectResponse<{
    access_token: string
    refresh_token: string
    user: Account
}> {
    result: {
        access_token: string
        refresh_token: string
        user: Account
    }
}



