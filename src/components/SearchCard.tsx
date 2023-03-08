import React, {MouseEventHandler} from "react";
import {useState as US} from "react";
import {searchForWorkspaceRoot} from "vite";

interface SearchCardProps {
    cardTitle:string;
    cardDescTag?:string[];
    cardImgURL:string;
    cardOnClick:MouseEventHandler;
}



const SearchCard: React.FC<SearchCardProps> = ({cardTitle, cardDescTag,
                                             cardImgURL,cardOnClick}) =>{

    return (

        <>
            <div className="card right-48 bottom-48 w-96 bg-base-100 shadow-xl z-1000">
                <figure><img src="https://picsum.photos/seed/수락정/400/225" alt="Shoes"/></figure>
                <button className="absolute right-3 top-3 btn btn-square btn-sm bg-orange-300 border-orange-300 hover:bg-orange-400
                hover:border-orange-400" onClick={cardOnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="card-body">
                    <h2 className="card-title">
                        {cardTitle}
                    </h2>
                    <div className="card-actions justify-end">
                        {cardDescTag?.map((item)=>{
                            return (
                                <>
                                    <div className="badge badge-outline">{item}</div>
                                </>
                            )
                        })}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-orange-300 border-orange-300 hover:bg-orange-400
                hover:border-orange-400">자세히 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard;