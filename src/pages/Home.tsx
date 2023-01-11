import React, {useEffect as UE, useState as US, useMemo as UM, FormEvent} from "react";
import {MapMarker, Map, useMap} from "react-kakao-maps-sdk";
import Table from "../components/Table";
import axios from "axios";
import {Position} from "postcss";
// home page route
const position: MapMarkerPosition[] = [
    {
        content: <div className="bg-white"> 수락정 </div>,
        title: "수락정",
        latlng: {lat: 37.51165526340373, lng: 127.0435756804201},
        type: "한식"
    },
    {
        content: <div className="bg-white"> 행복한 김치찌개 </div>,
        title: "행복한 김치찌개",
        latlng: {lat: 37.511094601359964, lng: 127.04421440535162},
        type: "한식"
    },
    {
        content: <div className="bg-white"> 바나프레소 선정릉점 </div>,
        title: "바나프레소 선정릉점",
        latlng: {lat: 37.5098946986603, lng: 127.0435814432},
        type: "카페"
    },
]
// @ts-ignore
const EventMarkerContainer = ({position, content}) => {
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
    const [searchResults, setSearchResult] = US<Documents[]>([])
    const [searchQuery, setSearchQuery] = US<string>('')
    const [searchTableVisible, setSearchTableVisible] = US<boolean>(false)
    const [searchTableData, setSearchTableData] = US<string[][]>([])
    const [mapMarkerList, setMapMarkerList] = US<MapMarkerPosition[]>(position)
    const query = searchQuery
    const searchData = searchTableData
    const onChangeSearch = (e: any) => {
        const {value, name} = e.target
        if (value.length === 0) {
            setSearchQuery('')
            setSearchTableVisible(false)
            setMapMarkerList([...position])
        } else {
            setSearchQuery(value)
        }

    }


    const data = mapMarkerList.map((item, idx) => {
        return [item.title, item.type]
    })

    const searchRestaurant = async () => {
        const request_url: string = `${import.meta.env.VITE_APP_KAKAO_API_URL}/v2/local/search/keyword.json`
        const parameter = {
            query: query,
            category_group_code: 'FD6',
            x: 127.044246,
            y: 37.5106922,
            radius: 500,
            page: 1,
            size: 10,
            sort: 'accuracy'
        }
        try{
            const response = await axios({
                method: 'get',
                url: request_url,
                headers: {'Authorization': `KakaoAK ${import.meta.env.VITE_APP_KAKAO_REST_API_KEY}`},
                params: parameter
            })
            const data:Documents[] = response.data.documents
            setSearchResult((prev)=>{
                const ls = [...data,...prev]
                return ls
            })
            const searchData = searchResults.map((item, idx) => {
                let category_name: any = item.category_name
                category_name = category_name.split(" > ")
                let category:string = category_name[1]
                return (
                    [category, item.place_name]
                )
            })
            const mapMarker = searchResults.map((item, idx) => {
                let category_name: string = item.category_name.split(" > ")[1]
                return {
                    content: <div className="bg-white"> {item.place_name} </div>,
                    title: item.place_name,
                    latlng: {
                        lat: parseFloat(item.y),
                        lng: parseFloat(item.x)
                    },
                    type: category_name
                }
            })
            setSearchTableData((prev)=>{return [...searchData,...prev]})
            setSearchTableVisible(true)
            setMapMarkerList((prev)=>{return [...mapMarker,...prev]})
        }
        catch(e) {
            setSearchTableVisible(false)
            setMapMarkerList([...position])
        }

    }

    const header = ["", "이름", "카테고리"]

    return (
        <>
            <main className="pt-20 px-10 h-screen">
                <div className="mx-auto w-full h-screen flex">
                    <Map
                        center={{lat: 37.5106922, lng: 127.044246}}
                        level={1}
                        maxLevel={5}
                        minLevel={1}
                        isPanto={true}
                        className="rounded-l-2xl w-[70%] h-[80%] max-h-[80%] border border-gray-800"
                    >
                        {mapMarkerList.map((value) => (
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
                                <input name="search" type="text" placeholder="Search…"
                                       className="input input-bordered border-orange-100 w-full" value={query}
                                       onChange={onChangeSearch}/>
                                <label htmlFor="search-result-modal"
                                       className="btn btn-square bg-orange-200 border-orange-400 hover:border-orange-500 hover:bg-orange-300"
                                       onClick={searchRestaurant}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        {
                            searchTableVisible ?
                                <Table header={["", "카테고리", "이름"]} data={searchData} tableClassName="mt-3"
                                       tableHeadClassName="bg-orange-200"/> :
                                <Table header={header} data={data} tableClassName="mt-3"
                                       tableHeadClassName="bg-orange-200"/>
                        }

                    </div>
                </div>

            </main>
        </>
    )
}

export default Home