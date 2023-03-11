import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BACKEND_API_HOST

const restaurant = {
    restaurantList: async (): Promise<getRestaurantListResponse> => {
        const response = await axios.get<getRestaurantListResponse>(`${BASE_URL}/restaurant/`)
        return response.data
    },
    restaurantInfo: async (id: number): Promise<getRestaurantInfoResponse> => {
        const response = await axios.get<getRestaurantInfoResponse>(`${BASE_URL}/restaurant/${id}/`)
        return response.data
    },
    createRestaurant: async (data: Restaurant): Promise<getRestaurantInfoResponse> => {
        const response = await axios.post<getRestaurantInfoResponse>(`${BASE_URL}/restaurant/`, data)
        return response.data
    },
    updateRestaurant: async (id:number, data: Restaurant): Promise<getRestaurantInfoResponse> => {
        const response = await axios.put<getRestaurantInfoResponse>(`${BASE_URL}/restaurant/${id}/`, data)
        return response.data
    },
    deleteRestaurant: async (id:number):Promise<null> => {
        const response = await axios.delete<null>(`${BASE_URL}/restaurant/review/${id}`)
        return response.data
    },
    reviewList: async (): Promise<getReviewListResponse> => {
        const response = await axios.get<getReviewListResponse>(`${BASE_URL}/restaurant/review/`)
        return response.data
    },
    reviewInfo: async (id: number): Promise<getReviewInfoResponse> => {
        const response = await axios.get<getReviewInfoResponse>(`${BASE_URL}/restaurant/review/${id}/`)
        return response.data
    },
    createReview: async (data: Restaurant): Promise<getReviewInfoResponse> => {
        const response = await axios.post<getReviewInfoResponse>(`${BASE_URL}/restaurant/review/`, data)
        return response.data
    },
    updateReview: async (id:number, data: Restaurant): Promise<getReviewInfoResponse> => {
        const response = await axios.put<getReviewInfoResponse>(`${BASE_URL}/restaurant/review/${id}/`, data)
        return response.data
    },
    deleteReview: async (id:number):Promise<null> => {
        const response = await axios.delete<null>(`${BASE_URL}/restaurant/review/${id}`)
        return response.data
    }
}

export default restaurant