import axios from "axios";

const restaurant = {
    restaurantList: async (): Promise<getRestaurantListResponse> => {
        const response = await axios.get<getRestaurantListResponse>('/restaurant/')
        return response.data
    },
    restaurantInfo: async (id: number): Promise<getRestaurantInfoResponse> => {
        const response = await axios.get<getRestaurantInfoResponse>(`/restaurant/${id}/`)
        return response.data
    },
    createRestaurant: async (data: Restaurant): Promise<getRestaurantInfoResponse> => {
        const response = await axios.post<getRestaurantInfoResponse>('/restaurant/', data)
        return response.data
    },
    updateRestaurant: async (id:number, data: Restaurant): Promise<getRestaurantInfoResponse> => {
        const response = await axios.put<getRestaurantInfoResponse>(`/restaurant/${id}/`, data)
        return response.data
    },
    deleteRestaurant: async (id:number):Promise<null> => {
        const response = await axios.delete<null>(`/restaurant/review/${id}`)
        return response.data
    },
    reviewList: async (): Promise<getReviewListResponse> => {
        const response = await axios.get<getReviewListResponse>('/restaurant/review/')
        return response.data
    },
    reviewInfo: async (id: number): Promise<getReviewInfoResponse> => {
        const response = await axios.get<getReviewInfoResponse>(`/restaurant/review/${id}/`)
        return response.data
    },
    createReview: async (data: Restaurant): Promise<getReviewInfoResponse> => {
        const response = await axios.post<getReviewInfoResponse>('/restaurant/review/', data)
        return response.data
    },
    updateReview: async (id:number, data: Restaurant): Promise<getReviewInfoResponse> => {
        const response = await axios.put<getReviewInfoResponse>(`/restaurant/review/${id}/`, data)
        return response.data
    },
    deleteReview: async (id:number):Promise<null> => {
        const response = await axios.delete<null>(`/restaurant/review/${id}`)
        return response.data
    }
}

export default restaurant