import React from "react";
import {MapMarker, Map} from "react-kakao-maps-sdk";
// home page route
function Home() {
    return (
        <>
        <main className="pt-20 px-10 ">
            <div className="mx-auto w-full ">
                <Map
                    center={{ lat: 33.5563, lng: 126.79581 }}
                    className="w-[70%] h-[800px] border border-gray-800"
                >
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                </Map>
            </div>

        </main>
        </>
    )
}
export default Home