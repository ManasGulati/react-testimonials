import React from 'react'
import { PiQuotesFill } from "react-icons/pi";
import reviews from '../data';

function Information(props) {
    return (
        <div className="flex flex-col relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={reviews[props.id-1].image} />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div>
                <h3 className="text-center mt-7 font-bold text-2xl capitalize leading-3">{reviews[props.id-1].name}</h3>
                <h5 className="text-center mt-4 text-violet-300 text-sm uppercase font-semibold">{reviews[props.id-1].job}</h5>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-violet-400 mx-auto mt-5">
                    <PiQuotesFill  />
                </div>
                <p className="text-center mt-4 text-slate-500 ">{reviews[props.id-1].text}</p>
                <div className="text-violet-400 mx-auto mt-5">
                    <PiQuotesFill  />
                </div>
            </div>
        </div>
    )
}

export default Information;
