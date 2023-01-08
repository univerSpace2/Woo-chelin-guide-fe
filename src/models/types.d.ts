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
    content: JSX.Element
    title: string
    latlng: {
        lat:number,
        lng:number
    }
    type:string
}