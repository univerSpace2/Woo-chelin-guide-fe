declare interface Documents {
    id:string
    place_name:string
    category_name:string
    category_group_code:string
    category_group_name:string
    phone:string
    address_name:string
    road_address_name:string
    x:string
    y:string
    place_url:string
    distance:string
}

declare interface MapMarkerPosition {
    content: MapCardProps
    latlng: {
        lat:number,
        lng:number
    }
    type: string
}
interface commonResponse<T> {
    message:string;
    result:T;
    status:boolean;
    status_code:number;
}
interface ListResponse<T> extends commonResponse<T[]>{
    result: T[];
}
interface ObjectResponse<T> extends commonResponse<T>{
    result: T;
}
interface StringResponse extends commonResponse<string> {
    result: string;
}
interface NumberResponse extends commonResponse<number> {
    result: number;
}
interface NullResponse extends commonResponse<null>{
    result: null;
}
interface BoolResponse extends commonResponse<boolean>{
    result:boolean;
}
const a:ListResponse