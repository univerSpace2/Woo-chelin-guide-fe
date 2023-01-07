import React, {useEffect as UE, useState as US, useMemo as UM, FormEvent} from "react";
import {MapMarker, Map, useMap} from "react-kakao-maps-sdk";
import Table from "../components/Table";
import axios from "axios";
// home page route
const position = [
    {
        content: <div className="bg-white"> 수락정 </div>,
        title: "수락정",
        latlng: { lat: 37.51165526340373, lng: 127.0435756804201 },
        type: "K"
    },
    {
        content: <div className="bg-white"> 행복한 김치찌개 </div>,
        title: "행복한 김치찌개",
        latlng: { lat: 37.511094601359964, lng: 127.04421440535162 },
        type: "K"
    },
    {
        content: <div className="bg-white"> 바나프레소 선정릉점 </div>,
        title: "바나프레소 선정릉점",
        latlng: { lat: 37.5098946986603, lng: 127.0435814432 },
        type: "C"
    },
]
// @ts-ignore
const EventMarkerContainer = ({ position, content }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = US(false)
    return (
        <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
        >
            {isVisible && content}
        </MapMarker>
    )
}




function Home() {
    const [searchResults,setSearchResult] = US<Documents[]>([])
    const [searchQuery,setSearchQuery] = US<string>('')

    const onChangeSearch = (e:any)=> {
        const {value, name} = e.target
        setSearchQuery(value)
    }
    const query = searchQuery
    const queryResult = searchResults

    const data = position.map((value, index) => {
        if(value.type === "K") {
            return [value.title, "한식"]
        }
        else if(value.type === "C") {
            return [value.title, "카페"]
        }
        return [value.title, value.type]
    }, [])

    function SearchRestaurant(search_text:string){

        const request_url:string = import.meta.env.VITE_APP_KAKAO_API_URL
        const parameter = {
            query: search_text,
            category_group_code:'FD6',
            x:127.044246,
            y:37.5106922,
            radius:1000,
            page:1,
            page_size:10,
            sort:'accuracy'
        }
        axios({
            method:'get',
            url:request_url,
            headers:{'Authorization':`KakaoAK ${import.meta.env.VITE_APP_KAKAO_REST_API_KEY}`},
            params:parameter
        }).then((res)=>{
            console.log(res.data)
            console.log(res.data.documents)
            setSearchResult(res.data.documents)
            console.log(searchResults)
        }).catch((e)=>{console.log(e)})

    }

    const header = ["","이름", "종류"]

    return (
        <>
        <main className="pt-20 px-10 h-full">
            <div className="mx-auto w-full h-full flex">
                <Map
                    center={{ lat: 37.5106922, lng: 127.044246 }}
                    level={ 1 }
                    maxLevel={5}
                    minLevel={1}
                    isPanto={true}
                    className="rounded-l-2xl w-[70%] h-[80%] max-h-[80%] border border-gray-800"
                >
                    {position.map((value: { latlng: { lat: any; lng: any; }; content: any; }) => (
                        <EventMarkerContainer
                            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                            position={value.latlng}
                            content={value.content}
                        />
                    ))}
                </Map>
                <div className="rounded-r-2xl w-[30%] h-[80%] bg-white p-10 relative">
                    <div className="form-control w-full">
                        <div className="input-group w-full">
                            <input name="search" type="text" placeholder="Search…" className="input input-bordered w-full" value={query} onChange={onChangeSearch}/>
                            <button className="btn btn-square bg-orange-200 hover:bg-orange-300" onClick={(event)=>{SearchRestaurant(searchQuery)}} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <Table header={header} data={data} tableClassName="mt-3" tableHeadClassName="bg-orange-200"/>
                </div>
            </div>
        </main>
        </>
    )
}
export default Home