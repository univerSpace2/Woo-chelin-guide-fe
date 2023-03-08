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
interface commonResponse {
    message:string;
    result:any;
    status:boolean;
    status_code:number;
}
interface ListResponse extends commonResponse<T>{
    result: T[];
}
interface ObjectResponse extends commonResponse<T>{
    result: T;
}
interface StringResponse extends commonResponse {
    result: string;
}
interface NumberResponse extends commonResponse {
    result: number;
}
interface NullResponse extends commonResponse{
    result: null;
}
interface BoolResponse extends commonResponse{
    result:boolean;
}