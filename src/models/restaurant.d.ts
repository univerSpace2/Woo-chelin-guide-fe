interface Review{
    id?:number
    user_id?:number
    content:string
    rating:string
    created_at?:string
    updated_at?:string
    good_cnt?:number
    bad_cnt?:number
    restaurant_id:number
}


interface Restaurant {
    id? :number
    name:string
    description:string
    rating?:string
    average_price?: '$' | '$$' | '$$$'
    address_ko:string
    address_en?:string
    longitude:number
    latitude:number
    type:string
    genre:string
    reviews?:Review[]
}

interface getRestaurantInfoResponse extends ObjectResponse {
    result:Restaurant
}

interface getRestaurantListResponse extends ListResponse{
    result:Restaurant[]
}

interface getReviewInfoResponse extends ObjectResponse{
    result:Review
}

interface getReviewListResponse extends ListResponse{
    result:Review[]
}


