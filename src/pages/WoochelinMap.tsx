import React, {useEffect as UE, useState as US, useMemo as UM, FormEvent, useRef as UR, useEffect} from "react";
import {MapMarker, Map, useMap, CustomOverlayMap} from "react-kakao-maps-sdk";
import Table from "../components/Table";
import axios from "axios";
import {Position} from "postcss";
import MapCard from "../components/MapCard";
import SearchCard from "../components/SearchCard";
import secureLocalStorage from "react-secure-storage";
import {useNavigate} from "react-router-dom";
// home page route
const position: MapMarkerPosition[] = [
    {
        content:{
            cardTitle:"",
            cardDescription:"",
            cardDescTag:["",""],
            cardHot:true,
            cardImgURL:"https://picsum.photos/seed/수락정/400/225"
        },
        latlng: {lat: 0, lng: 0},
        type: ""
    },
    {
        content: {
            cardTitle:"",
            cardDescription:"",
            cardDescTag:["",""],
            cardHot:false,
            cardImgURL:"https://picsum.photos/seed/행복한김치찌개/400/225"
        },
        latlng: {lat: 0, lng: 0},
        type: ""
    },
    {
        content:  {
            cardTitle:"",
            cardDescription:"",
            cardDescTag:["",],
            cardHot:true,
            cardImgURL:"https://picsum.photos/seed/바나프레소/400/225"
        },
        latlng: {lat: 0, lng: 0},
        type: ""
    },
]
// @ts-ignore
const EventMarkerContainer = ({position, content}) => {
    const map = useMap()
    const [isVisible, setIsVisible] = US(false)
    const onClick = () => {
        setIsVisible(false)
    }
    return (
        <>
            <MapMarker
                position={position} // 마커를 표시할 위치
                // @ts-ignore
                onClick={(marker) => {
                    map.panTo(marker.getPosition())
                    if(isVisible){
                        setIsVisible(false)
                    }
                    else{
                        setIsVisible(true)
                    }
                }}
            />
            <CustomOverlayMap position={position}>
                {isVisible && (<MapCard
                    cardTitle={content.cardTitle}
                    cardDescription={content.cardDescription}
                    cardImgURL={content.cardImgURL}
                    cardHot={content.cardHot}
                    cardDescTag={content.cardDescTag}
                    cardOnClick={onClick}
                />)}
            </CustomOverlayMap>
        </>
    )
}


function WoochelinMap() {
    const navigate = useNavigate()

    const searchResultArr = UR<Documents[]>([])
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
        return [item.content.cardTitle, item.type]
    })

    const searchRestaurant = async () => {
        searchResultArr.current = []
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
            searchResultArr.current = data
            const searchData = searchResultArr.current.map((item, idx) => {
                let category_name: any = item.category_name
                category_name = category_name.split(" > ")
                let category:string = category_name[1]
                return (
                    [category, item.place_name]
                )
            })
            const mapMarker = searchResultArr.current.map((item, idx) => {
                let category_name: string = item.category_name.split(" > ")[1]
                return {
                    content: {
                        cardTitle:item.place_name,
                        cardDescTag: item.category_name.split((">")),
                        cardImgURL:`https://picsum.photos/seed/${item.id}/400/225`
                    },
                    latlng: {
                        lat: parseFloat(item.y),
                        lng: parseFloat(item.x)
                    },
                    type: category_name
                }
            })
            setSearchTableData([...searchData])
            setSearchTableVisible(true)
            setMapMarkerList([...mapMarker])
        }
        catch(e) {
            setSearchTableVisible(false)
            setMapMarkerList([...position])
        }

    }

    const header = ["", "이름", "카테고리"]

    useEffect(() => {
        const access_token = secureLocalStorage.getItem('access_token')
        if (access_token === null) {
            navigate('/')
        }
    }, []);

    return (
        <>
            <main className="pt-20 px-10 h-screen">
                <div className="mx-auto w-full h-screen flex">
                    <Map
                        center={{lat: 37.492870, lng: 127.039152}}
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
                                       onChange={onChangeSearch}
                                       onKeyUp={(e)=>{if(e.key==='Enter'){
                                           searchRestaurant()
                                       }}}
                                />
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

export default WoochelinMap