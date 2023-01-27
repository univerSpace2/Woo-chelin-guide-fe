import React from "react";

interface MapCardProps {
    cardTitle:string;
    cardDescription:string;
    cardDescTag?:string[];
    cardHot?:boolean;
    cardImgURL:string;
}

const MapCard: React.FC<MapCardProps> = ({cardTitle, cardDescription, cardDescTag,cardHot,cardImgURL}) =>{
    return(
        <>
            <div className="relative bottom-[22rem] card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://picsum.photos/seed/수락정/400/225" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        수락정
                        <div className="badge badge-secondary">인기</div>
                    </h2>
                    <p>김치찌개와 제육볶음이 맛있는 집</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">한식</div>
                        <div className="badge badge-outline">점심</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">자세히 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapCard;